import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface Props {
  children?: React.ReactNode | React.ReactNode[];
  title?: string;
  body?: string;
  startsOpen?: boolean | number;
  hasBackdrop?: boolean;
  closeOnBackdropClick?: boolean;
  // closeOnEsc?: boolean;
}

interface State {
  isModalOpen: boolean;
}

class Modal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };

    this.setIsModalOpen = this.setIsModalOpen.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount(): void {
    this.modalStartsOpen();
  }

  modalStartsOpen() {
    let startsOpen: boolean | number = false;
    let modalTimeToOpen: number = 500;

    if (typeof this.props.startsOpen === 'boolean') {
      startsOpen = this.props.startsOpen;
    } else {
      modalTimeToOpen = this.props.startsOpen as number;
    }

    if (this.props.startsOpen) {
      startsOpen = true;
    }

    setTimeout(() => {
      this.setIsModalOpen(startsOpen as boolean);
    }, modalTimeToOpen);
  }

  closeModal() {
    this.setIsModalOpen(false);
  }

  openModal() {
    this.setIsModalOpen(true);
  }

  setIsModalOpen(open: boolean) {
    this.setState({ isModalOpen: open });
  }

  render() {
    return (
      <>
        <Transition appear show={this.state.isModalOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => {
              this.props.closeOnBackdropClick ? this.closeModal() : null;
            }}
          >
            {(this.props.hasBackdrop || false) && <div className="fixed inset-0 bg-slate-900/50" aria-hidden="true" />}

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="flex w-full max-w-sm transform flex-col transition-all">
                    <div
                      className={`${
                        this.props.children ? `rounded-bl-none rounded-br-none border-b-0 pb-10` : ''
                      } flex transform flex-col items-center gap-8 overflow-hidden rounded-3xl border border-slate-50/10 bg-slate-800/50 px-10 py-16 text-slate-50 shadow-xl backdrop-blur-[20px] backdrop-saturate-[180%] transition-all`}
                    >
                      {this.props.title ? (
                        <Dialog.Title as="h3" className="flex justify-center text-center text-3xl font-bold">
                          {this.props.title}
                        </Dialog.Title>
                      ) : null}

                      {this.props.body ? (
                        <Dialog.Description className="flex flex-col items-center text-center leading-relaxed">
                          {this.props.body}
                        </Dialog.Description>
                      ) : null}
                    </div>

                    {this.props.children ? <div className="flex w-full empty:hidden">{this.props.children}</div> : null}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    );
  }
}

export default Modal;
