interface IProps {
  title: string;
  content: string;
}

const IntroductionItem = ({ title, content }: IProps) => {
  return (
    <div className="w-full border-t-[1px] border-solid border-[#FFFFFF]/30 px-4 py-6 xs:px-6 xs:py-8 lg:grid lg:grid-cols-5 lg:gap-10 lg:py-10 lg:pl-10 lg:pr-5 xl:py-15">
      <div className="mb-2 lg:col-span-2 lg:mb-0">
        <p className="font-archivo text-xl xs:text-22/28 font-bold uppercase lg:pr-5 lg:text-3xl xl:pr-10">{title}</p>
      </div>
      <div className="lg:col-span-3">
        <p className="lg:text-xl">{content}</p>
      </div>
    </div>
  );
};

export default IntroductionItem;
