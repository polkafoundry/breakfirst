interface IProps {
  stroke: string;
  heading: string;
}

const HeadlingWithStroke = ({ stroke = '', heading = '' }: IProps) => {
  return (
    <div className="text-center">
      <p className="heading-text-stroke absolute -top-9 left-0 -z-10 w-full font-archivo text-[60px] font-bold uppercase leading-[72px] tracking-wider lg:-top-20 lg:text-[120px] lg:leading-[144px]">
        {stroke}
      </p>
      <h2 className="font-archivo text-3xl font-bold uppercase lg:text-5xl">{heading}</h2>
    </div>
  );
};

export default HeadlingWithStroke;
