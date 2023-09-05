type Props = {
  title?: string;
  japaneseTitle?: string;
};

export default function SectionTitle({ title, japaneseTitle }: Props) {
  return (
    <div className="relative w-full h-full">
      <div className="w-20 h-6 bg-ng-red absolute -top-6 right-0"></div>
      <span className="absolute -top-[2.35rem] right-0 uppercase text-lg font-bold font-clash mix-blend-exclusion">
        {title}
      </span>
      <span className="font-japan absolute text-xl -top-5 -right-1 mix-blend-exclusion">
        {japaneseTitle}
      </span>
    </div>
  );
}
