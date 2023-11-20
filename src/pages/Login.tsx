/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { isUserDataFetched, guestsData, guestFamilyData } from '../data/atoms';
import { GuestFamilyI, RoutePathsE } from '../models/Models';
import { lsKeyLoginCode } from '../configs/variables';
import Modal from '../components/Modal';

export const Login: FC = () => {
  const [, setHasUserData] = useAtom(isUserDataFetched);
  const [jsonGuestsData] = useAtom(guestsData);
  const [, setJsonData] = useAtom(guestFamilyData);

  const [inputValue, setInputValue] = useState('');
  const [isFetching, setIsFetching] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (!jsonGuestsData) {
      navigate(RoutePathsE.Home);
    } else {
      setIsFetching(false);
      const storedLoginCode = localStorage.getItem(lsKeyLoginCode);

      if (storedLoginCode) {
        setInputValue(storedLoginCode);
      }
    }
  }, [navigate, jsonGuestsData, setHasUserData]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const allGuestsData: GuestFamilyI[] = jsonGuestsData || [];
    if (allGuestsData) {
      const familyData = allGuestsData.find((family) => family.loginCode === inputValue);
      if (familyData) {
        setJsonData(familyData);

        if (familyData.loginCode) {
          localStorage.setItem(lsKeyLoginCode, familyData.loginCode);
        }

        setHasUserData(true);
        navigate(RoutePathsE.Home);
      }
    }
  };

  return (
    <>
      {!isFetching ? (
        <Modal title="Insere o Código" body="Vê se descobres o 'Easter-Egg'" extra="👆 + 🔊 = 😆" startsOpen={true}>
          <form className="translucent flex w-full flex-col rounded-b-3xl" onSubmit={handleSubmit}>
            <input
              className="input w-full text-center"
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Enter code"
            />
            <button className="btn !rounded-b-3xl !rounded-t-none" type="submit" disabled={inputValue.trim() === ''}>
              Submit
            </button>
          </form>
        </Modal>
      ) : null}
    </>
  );
};
