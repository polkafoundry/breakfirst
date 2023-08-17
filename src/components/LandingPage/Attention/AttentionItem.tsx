interface IProps {
  title: string;
  content: string;
}

const AttentionItem = ({ title, content }: IProps) => {
  return (
    <div className="w-full bg-[#121213] p-8 lg:px-12 lg:py-12 xl:px-15">
      <p className="mb-2 font-archivo text-22/28 font-bold uppercase lg:mb-3 lg:text-4xl">{title}</p>
      <p className="lg:text-xl">{content}</p>
    </div>
  );
};

export default AttentionItem;
