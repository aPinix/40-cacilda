import React, { FC, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isUserDataFetched, guestsData, guestFamilyData } from '../data/atoms';
import { useAtom } from 'jotai';
import fetchData from '../utils/Data';
import { GuestTypeE, RoutePathsE } from '../models/Models';
import { gsap } from 'gsap';
import { useResizeListener } from '../hooks/useResize';

import imgCover from '../assets/images/poster.jpg';
import imgCallMe from '../assets/images/call-me.png';
import imgMe from '../assets/images/me.png';
import ConfettiExplosion from 'react-confetti-explosion';
import { basePath } from '../configs/variables';
import { removeDuplicateSlashes } from '../utils/String';

export const Home: FC = () => {
  const navigate = useNavigate();
  const [hasUserData] = useAtom(isUserDataFetched);
  const [, setJsonData] = useAtom(guestsData);
  const [jsonFamilyData] = useAtom(guestFamilyData);

  const posterImageRef = useRef<HTMLImageElement>(null);
  const movieInfoRef = useRef<HTMLDivElement>(null);
  const ticketTopRef = useRef<HTMLDivElement>(null);

  const [isExploding, setIsExploding] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const explodingDuration = 3000;
  const explodeProps = {
    force: 0.5,
    duration: explodingDuration,
    particleCount: 450,
    width: window.innerWidth,
  };

  useEffect(() => {
    fetchData().then((data) => {
      setJsonData(data);

      if (!hasUserData) {
        navigate(RoutePathsE.Login);
      } else {
        if (jsonFamilyData) {
          setIsFetching(false);
          bodyScroll(false);
          processData();
          setTimeout(() => {
            updateSizes();
            createTimelineEffect();
            bodyScroll(true);
            setIsExploding(true);

            setTimeout(() => {
              setIsExploding(false);
            }, explodingDuration);
          }, 500);
        }
      }
    });
  }, [setJsonData, navigate, hasUserData, jsonFamilyData]);

  const processData = () => {};

  const bodyScroll = (enable: boolean) => {
    enable ? (document.body.style.overflow = '') : (document.body.style.overflow = 'hidden');
  };

  const createTimelineEffect = () => {
    const posterImageBounds = posterImageRef.current?.getBoundingClientRect();
    const ticketTopBounds = ticketTopRef.current?.getBoundingClientRect();

    if (posterImageBounds && ticketTopBounds) {
      const safeOffset = 40;
      const stopHeight = ticketTopBounds.height + safeOffset * 2;

      gsap.set('.ticket-info', {
        y: -(ticketTopBounds.top - posterImageBounds.top - posterImageBounds.height + stopHeight - safeOffset * 2),
      });
      gsap.timeline({
        scrollTrigger: {
          trigger: '.ticket-info',
          pin: true,
          start: 0,
          end: stopHeight,
        },
      });

      const sectionsInner = Array.from(document.querySelectorAll('.section-inner'));
      sectionsInner.map((_, index) => {
        if (index > 0) {
          gsap.set(sectionsInner[index], { rotationX: -120 });
          gsap
            .timeline({
              scrollTrigger: {
                trigger: sectionsInner[index],
                scrub: true,
                start: 'top',
                end: '+=200',
              },
            })
            .to(sectionsInner[index], { rotationX: 0 }, 0);
        }
      });
    }
  };

  useResizeListener(() => {
    updateSizes();
  });

  const updateSizes = () => {
    const appHeight = window.innerHeight;
    document.documentElement.style.setProperty(`--app-height`, `${appHeight}px`);

    const posterImageBounds = posterImageRef.current?.getBoundingClientRect();
    const ticket = movieInfoRef.current;

    if (posterImageBounds && ticket) {
      ticket.style.width = `${posterImageBounds.width - 4}px`;
      ticket.style.opacity = '1';
    }
  };

  const getType = (type: string): string => {
    switch (type) {
      case GuestTypeE.Child0To5:
        return 'Criança 0-5';
      case GuestTypeE.Child5To10:
        return 'Criança 5-10';
      case GuestTypeE.Child10Plus:
        return 'Criança 10+';
      default:
      case GuestTypeE.Adult:
        return 'Adulto';
    }
  };

  const formatName = (name: string) => {
    const regex = /\(([^)]+)\)/;
    name = name.replace(regex, '').trim();
    return name;
  };

  const playSound = () => {
    const pathPrefix = removeDuplicateSlashes(`${basePath}/sounds/`);
    const pathFileExtension = '.mp3';
    const soundNames = [
      'abasir',
      'abre_los_hojos',
      'agora_demora-te',
      'alimpa-te_saraiva',
      'arghhhh',
      'atao_ha',
      'banzawayyyy',
      'ch_ch_vousen',
      'ehhh_cacilda',
      'ftiiiihhh',
      'grrrrr',
      'na_sossegas_ha',
      'na_te_mexas',
      'o_alcool_da_cozinha',
      'o_socio_deves_ser_filho_de_gente_parva_ou_jovem_mete_nojo',
      'olha_la_pa',
      'pabadacas',
      'pchhhteii',
      'porque_te_chamam_cara_de_cu',
      'sai_de_cima_da_arca_e_da_la_uma_bini',
      'seu_estupido',
      'sim_sim_simmmmm',
      'ta_queeeeto',
      'take_5',
      'tal_nao_e_ha',
      'tirodedo_dai',
      'vai_haver_bolo_pa_todos',
      'yarrrrgggg',
      'yololooo',
      'zomus',
    ];
    const sounds = soundNames.map((name) => `${pathPrefix}${name}${pathFileExtension}`);
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    const audio = new Audio(randomSound);
    audio.play();
  };

  return (
    <>
      <div className="image-body pointer-events-none z-[9999]">
        {isExploding ? (
          <div className="absolute left-1/2 top-1/4 z-[99999]">
            <ConfettiExplosion {...explodeProps} />
          </div>
        ) : null}
      </div>

      <div className="instructions">Scroll</div>

      <div className="section ticket-cover">
        <div className="cover">
          <img
            className="movie-poster block h-full w-full rounded-xl object-cover"
            ref={posterImageRef}
            src={imgCover}
            alt="Poster Image"
          />
          <img
            className="movie-poster-shadow block h-full w-full rounded-xl object-cover"
            ref={posterImageRef}
            src={imgCover}
            alt="Poster Image"
          />
        </div>
      </div>

      {!isFetching ? (
        <>
          <div className="section ticket-info">
            <div ref={movieInfoRef} className="movie-info">
              {/* invite */}
              {jsonFamilyData ? (
                <div ref={ticketTopRef} className="section-inner flex flex-col gap-4 bg-slate-50">
                  <div className="pb-6 text-3xl">Convite{jsonFamilyData.family.length > 1 ? 's' : ''}</div>
                  {jsonFamilyData.people.map((item, index) => {
                    return (
                      <React.Fragment key={item.name}>
                        {index !== 0 ? <hr className="py-2" /> : null}
                        <div key={item.name}>
                          <div className="info mid">
                            <div className="flex flex-col">
                              <div className="label">Nome</div>
                              <div className="value">{formatName(item.name)}</div>
                            </div>
                            <div className="time !text-sm !text-slate-400">{getType(item.type)}</div>
                          </div>
                          <div className="py-2"></div>
                          <div className="info info-regular small">
                            {Object.entries(item.attending).map(([key, value]) => {
                              return (
                                <React.Fragment key={key}>
                                  {key === 'lunch' ? (
                                    <div className="flex flex-col gap-2">
                                      <div className="label">Almoço</div>
                                      <div className="value flex items-center justify-center">
                                        <div
                                          className={`inline-flex h-4 w-4 rounded-full border-2 ${
                                            value ? 'border-lime-500 bg-lime-400' : 'border-slate-300 bg-slate-200'
                                          }`}
                                        ></div>
                                      </div>
                                    </div>
                                  ) : null}
                                  {key === 'kart' ? (
                                    <div className="flex flex-col gap-2">
                                      <div className="label">Karts</div>
                                      <div className="value flex items-center justify-center">
                                        <div
                                          className={`inline-flex h-4 w-4 rounded-full border-2 ${
                                            value ? 'border-lime-500 bg-lime-400' : 'border-slate-300 bg-slate-200'
                                          }`}
                                        ></div>
                                      </div>
                                    </div>
                                  ) : null}
                                  {key === 'dinner' ? (
                                    <div className="flex flex-col gap-2">
                                      <div className="label">Jantar</div>
                                      <div className="value flex items-center justify-center">
                                        <div
                                          className={`inline-flex h-4 w-4 rounded-full border-2 ${
                                            value ? 'border-lime-500 bg-lime-400' : 'border-slate-300 bg-slate-200'
                                          }`}
                                        ></div>
                                      </div>
                                    </div>
                                  ) : null}
                                  {key === 'party' ? (
                                    <div className="flex flex-col gap-2">
                                      <div className="label">Festa</div>
                                      <div className="value flex items-center justify-center">
                                        <div
                                          className={`inline-flex h-4 w-4 rounded-full border-2 ${
                                            value ? 'border-lime-500 bg-lime-400' : 'border-slate-300 bg-slate-200'
                                          }`}
                                        ></div>
                                      </div>
                                    </div>
                                  ) : null}
                                </React.Fragment>
                              );
                            })}
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              ) : null}

              {/* calendar */}
              <div className="section-inner flex flex-col gap-4">
                <div className="flex flex-col gap-2 pb-6">
                  <div className="text-3xl">Programação</div>
                  <span className="inline-flex items-center justify-center self-start rounded-lg bg-lime-600 px-[6px] py-[3px] text-base font-medium text-slate-50">
                    Dia 25 Nov
                  </span>
                </div>
                <div className="info mid">
                  {/* <div className="art">🧆</div> */}
                  <div className="flex flex-col gap-1">
                    <div className="label">Almoço</div>
                    <div className="value">Restaurante "À do Mário"</div>
                    <div className="address">R. do Electricista 8, Évora</div>
                    <div className="time">
                      <span className="inline-flex items-center justify-center rounded-lg bg-slate-400 px-[6px] py-[3px] text-sm font-medium text-slate-50">
                        13:00
                      </span>
                    </div>
                  </div>
                  <div className="art">
                    <div className="relative flex h-[100px] w-[100px] justify-center overflow-hidden rounded-2xl border border-slate-300">
                      <div className="w-[calc(120px - 1px)] absolute bottom-0 flex">
                        <iframe
                          className="h-[120px] w-[420px] rounded-2xl border-none"
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10860.400349856982!2d-7.9039452893367095!3d38.583744369478715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19e5032063ec97%3A0x508a9ec8f62895f2!2sRestaurante%20%C3%80%20do%20M%C3%A1rio!5e0!3m2!1sen!2spt!4v1700448713041!5m2!1sen!2spt"
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="info mid">
                  {/* <div className="art">🏎️</div> */}
                  <div className="flex flex-col gap-1">
                    <div className="label">Prova de Karts</div>
                    <div className="value">Karting de Évora</div>
                    <div className="address">Estrada Nacional 114 - Km 182,9, 7000 Évora</div>
                    <div className="time">
                      <span className="inline-flex items-center justify-center rounded-lg bg-slate-400 px-[6px] py-[3px] text-sm font-medium text-slate-50">
                        16:40
                      </span>
                    </div>
                  </div>
                  <div className="art">
                    <div className="relative flex h-[100px] w-[100px] justify-center overflow-hidden rounded-2xl border border-slate-300">
                      <div className="w-[calc(120px - 1px)] absolute bottom-0 flex">
                        <iframe
                          className="h-[120px] w-[420px] rounded-2xl border-none"
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3119.3069093513545!2d-7.9872814!3d38.5727797!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19efbe7024d61b%3A0xf52d8cf02cd85550!2sKarting%20Evora!5e0!3m2!1sen!2spt!4v1700449791429!5m2!1sen!2spt"
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="info mid">
                  {/* <div className="art">🥘</div> */}
                  <div className="flex flex-col gap-1">
                    <div className="label">Jantar</div>
                    <div className="value">Armazém8</div>
                    <div className="address">R. do Electricista 8, Évora</div>
                    <div className="time">
                      <span className="inline-flex items-center justify-center rounded-lg bg-slate-400 px-[6px] py-[3px] text-sm font-medium text-slate-50">
                        20:00
                      </span>
                    </div>
                  </div>
                  <div className="art">
                    <div className="relative flex h-[100px] w-[100px] justify-center overflow-hidden rounded-2xl border border-slate-300">
                      <div className="w-[calc(120px - 1px)] absolute bottom-0 flex">
                        <iframe
                          className="h-[120px] w-[420px] rounded-2xl border-none"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.5840333038286!2d-7.909684800000002!3d38.5433558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19fb2f514c5d9d%3A0x4b6624f04a5d0bb1!2sArmaz%C3%A9m%208!5e0!3m2!1sen!2spt!4v1700451717728!5m2!1sen!2spt"
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="info mid">
                  {/* <div className="art">🎉</div> */}
                  <div className="flex flex-col gap-1">
                    <div className="label">🎉 Festa</div>
                    <div className="value">Armazém8</div>
                    <div className="address">R. do Electricista 8, Évora</div>
                    <div className="time">
                      <span className="inline-flex items-center justify-center rounded-lg bg-slate-400 px-[6px] py-[3px] text-sm font-medium text-slate-50">
                        21:30
                      </span>
                    </div>
                  </div>
                  <div className="art">
                    <div className="relative flex h-[100px] w-[100px] justify-center overflow-hidden rounded-2xl border border-slate-300">
                      <div className="w-[calc(120px - 1px)] absolute bottom-0 flex">
                        <iframe
                          className="h-[120px] w-[420px] rounded-2xl border-none"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.5840333038286!2d-7.909684800000002!3d38.5433558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19fb2f514c5d9d%3A0x4b6624f04a5d0bb1!2sArmaz%C3%A9m%208!5e0!3m2!1sen!2spt!4v1700451717728!5m2!1sen!2spt"
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* call */}
              <div className="section-inner section-inner--enjoy section-inner--no-pad--bottom !bg-lime-200">
                <div className="title !text-green-600">Se precisares de ligar!</div>
                <div className="made">
                  <a href="tel:+351969163736">
                    <img className="!h-28 !w-28" src={imgCallMe} alt="Call Me" />
                  </a>
                </div>
              </div>

              {/* me */}
              <div className="section-inner section-inner--enjoy section-inner--no-pad--bottom !border-none !bg-transparent !pt-0">
                <img className="rotate-180" src={imgMe} alt="Me" onClick={playSound} />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
