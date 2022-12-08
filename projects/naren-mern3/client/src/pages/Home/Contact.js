import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector} from 'react-redux'

function Contact() {
  const { portfolioData } = useSelector((state) => state.root)
  const {contact} = portfolioData
  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm-flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-tertiary text-sm">{"{"}</p>
          {Object.keys(contact).map((key) => (
            <p className="ml-5">
              <span className="text-tertiary text-sm">{key} : </span>
              <span className="text-tertiary text-sm">{contact[key]}</span>
            </p>
          ))}
          <p className="text-tertiary">{"}"}</p>
        </div>
        <div className="h-[400px]">
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_eroqjb7w.json"
            background="transparent"
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
