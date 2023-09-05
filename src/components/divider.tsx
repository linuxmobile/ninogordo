export default function Divider() {
  return (
    <div className="relative w-[100lvw] h-32 relative opacity-75 my-2">
      <div className="bg-ng-red w-full h-3"></div>
      <div className="h-13 w-3 bg-ng-red absolute -top-3 right-8"></div>
      <div className="h-13 w-3 bg-ng-red absolute -top-3 left-8"></div>
    </div>
  );
}
