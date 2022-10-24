
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { NextPage } from "next";
import Image from 'next/image'
import upArrow from "../assets/up.png"
import downArrow from "../assets/down.png"
interface Props {
  question: string;
  answer: string;
}

const QuestionBox: NextPage<Props> = (props) => {
  return (
    <Disclosure as="div" className="mt-2">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-beige-100 px-4 py-2 text-left text-sm font-medium text-darkBeige hover:bg-beige-200">
            <span>{props.question}</span>
            {/* <ChevronRightIcon className="flex-none ui-open:rotate-90 ui-open:transform transition h-5 w-5" /> */}
            <div className='flex'>
              <Transition
                show={open}
                enter="transition duration-400 ease-out"
                enterFrom="transform rotate-90 opacity-0"
                enterTo="transform rotate-180 opacity-100"

              >
                <Image
                  src={upArrow}
                  alt="Picture of the author"
                  width="20px"
                  height="20px"
                />
              </Transition>

              <Transition
                appear={true}
                show={!open}
                enter="transition duration-400 ease-out"
                enterFrom="transform rotate-360 opacity-0"
                enterTo="transform rotate-270 opacity-100"
              >
                <Image
                  src={downArrow}
                  alt="Picture of the author"
                  width="20px"
                  height="20px"
                />
              </Transition>
            </div>

            {/* {
              open ? <Image
                src={upArrow}
                alt="Picture of the author"
                width="20px"
                height="20px"
              /> : <Image
                src={downArrow}
                alt="Picture of the author"
                width="20px"
                height="20px"
              />
            } */}

          </Disclosure.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel static className="pt-2">
              <div className='rounded-lg bg-white px-4 pt-2 pb-2 text-sm'>{props.answer}</div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

export default QuestionBox;