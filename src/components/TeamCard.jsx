/* eslint-disable react/prop-types */
import { Fragment, useEffect, useState, useRef } from "react"
import { Avatar, Typography, Button } from "@material-tailwind/react";
import { useTranslation } from 'react-i18next';
import { Dialog, Transition } from '@headlessui/react'
import team1 from '../assets/team1.png';
import team2 from '../assets/team2.png';
import team3 from '../assets/team3.png';
import team4 from '../assets/team4.png';
import team5 from '../assets/team5.png';
import team6 from '../assets/team6.png';
import team7 from '../assets/team7.png';

export default function TeamCard({title, text, classes, subtitle, avatar}) {
    const [shortText, setShortText] = useState('')
    const { t } = useTranslation();
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const image = getTeamImage(avatar)
    useEffect(()=>{
        const newText = text.substring(0,300)
        setShortText(newText)
    },[text])

    function getTeamImage(team) {
        switch (team) {
          case 'team1':
            return team1;
          case 'team2':
            return team2;
          case 'team3':
            return team3;
          case 'team4':
            return team4;
          case 'team5':
            return team5;
          case 'team6':
            return team6;
          case 'team7':
            return team7;
          default:
            return null;
        }
    }

    console.log(getTeamImage('team1'))

    return (
      <div className={`flex flex-col justify-center items-center font-poppins mx-3 rounded-lg bg-white shadow-lg overflow-hidden ${classes}`}>
        <div className="bg-blue-dark p-3 w-full flex flex-col justify-center items-center">
            <Avatar src={image} alt={title} withBorder={true} className="p-0.5 border-gray-500" size="xxl" />
            <Typography variant="lead" className="my-2 text-gray-50 font-poppins px-4 font-semibold text-sm text-center">
                {title}
            </Typography>
            <Typography variant="lead" className="text-gray-50 font-poppins px-4 font-semibold text-sm text-center">
                {subtitle}
            </Typography>
        </div>
        <div className="p-3 flex flex-col items-center">
            <p className={`text-xs text-center mt-5 px-3`}>{shortText}...</p>
            <Button variant="filled" size="md" className='bg-red-900 w-max mx-auto mt-3' ripple={true} onClick={()=> setOpen(true)}>
                {t('read_more')}
            </Button>
        </div>
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"> */}
                            <Avatar src={image} alt={title} withBorder={true} className="p-0.5 border-gray-500" size="xl" />
                            {/* </div> */}
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <Dialog.Title as="h2" className="text-base font-semibold leading-6 text-gray-900">
                                {title}
                            </Dialog.Title>
                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                {subtitle}
                            </Dialog.Title>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                {text}
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            onClick={() => setOpen(false)}
                        >
                            {t('close')}
                        </button>
                        </div>
                    </Dialog.Panel>
                    </Transition.Child>
                </div>
                </div>
            </Dialog>
        </Transition.Root>
      </div>
    )
  }
  