/* eslint-disable react/prop-types */
import { useForm, ValidationError } from '@formspree/react';
import { Button } from "@material-tailwind/react";
import { useTranslation } from 'react-i18next';

export default function ContactCard() {
    const [state, handleSubmit] = useForm("xjvqqaqn");
    const { t } = useTranslation();

    if (state.succeeded) {
        return  <div className="relative col-start-4 col-span-6 flex justify-center items-center min-h-[300px]  bg-gray-50 shadow-xl rounded-r-xl font-poppins p-10">
            <p className='text-lg'>{t('messageReceived')}</p>
        </div>
    }
    return (
        <form className="relative col-start-4 col-span-6 grid grid-cols-12 gap-10 bg-gray-50 shadow-xl rounded-r-xl font-poppins p-10" onSubmit={handleSubmit}>
        <div className="flex flex-col col-span-6">
            <label htmlFor="email">
                {t('email')}
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input type="email" name="email" id="email" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus:ring-red-700 sm:text-sm sm:leading-6" required placeholder={t('typeEmail')}/>
            </div>
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
        </div>
        <div className="flex flex-col col-span-6">
            <label htmlFor="name">
            {t('name')}
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input type="text" name="name" id="name" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus:ring-red-700 sm:text-sm sm:leading-6" required placeholder={t('typeName')}/>
            </div>
            <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
            />
        </div>
        <div className="flex flex-col col-span-12">
            <label htmlFor="message">
                {t('message')}
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <textarea type="text" name="message" id="message" className="min-h-[100px] block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus:ring-red-700 sm:text-sm sm:leading-6" required placeholder={t('typeMessage')}/>
            </div>
            <ValidationError 
                prefix="Message" 
                field="mesage"
                errors={state.errors}
            />
        </div>
        <div className="col-start-4 col-span-6">
            <Button type="submit" disabled={state.submitting} variant="filled" size="lg" className='bg-red-900 w-full mx-auto mb-3 ' ripple={true}>
                Submit
            </Button>
        </div>
</form>
    )
  }
  