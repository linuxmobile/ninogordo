export default function Divider() {
  return (
    <div className="relative w-full h-32 relative my-2">
      <div className="bg-ng-red w-full h-3"></div>
      <div className="h-13 w-3 bg-ng-red absolute -top-3 right-8"></div>
      <div className="h-13 w-3 bg-ng-red absolute -top-3 left-8"></div>
    </div>
  );
}
