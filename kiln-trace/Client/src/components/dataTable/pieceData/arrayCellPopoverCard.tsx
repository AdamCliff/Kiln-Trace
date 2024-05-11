interface Contents {
  innerGlaze?: string[];
  outerGlaze?: string[];
  innerUnderglaze?: string[];
  outerUnderglaze?: string[];
  innerSlip?: string[];
  outerSlip?: string[];
}

function ArrayCellPopoverCard({
  glazeType,
  contents,
}: {
  glazeType: "glaze" | "underglaze" | "slip";
  contents: Contents;
}) {
  const {
    innerGlaze,
    outerGlaze,
    innerUnderglaze,
    outerUnderglaze,
    innerSlip,
    outerSlip,
  } = contents;
  let inner: string[] | undefined, outer: string[] | undefined;

  if (glazeType === "glaze") {
    inner = innerGlaze;
    outer = outerGlaze;
  }
  if (glazeType === "underglaze") {
    inner = innerUnderglaze;
    outer = outerUnderglaze;
  }
  if (glazeType === "slip") {
    inner = innerSlip;
    outer = outerSlip;
  }

  return (
    <>
      <div className="text-center space-y-2 w-full h-full">
        <div className="text-left space-y-1">
          <span className="font-medium pointer-events-none pl-2 text-text capitalize">
            Inner {glazeType}
          </span>
          <div className="flex flex-col items-center justify-center gap-1 w-full">
            {inner?.map((glaze: string, i) => {
              return (
                <>
                  <div className="relative flex items-center justify-start w-full">
                    <span className="absolute right-2 w-4 px-1 bg-accent rounded shadow-inset-custom text-xs text-text font-medium text-center pointer-events-none">
                      {i + 1}
                    </span>
                    <span className="text-left bg-background rounded cursor-default hover:bg-opacity-75 transition-colors shadow-custom p-1 pl-4 w-full">
                      {glaze}
                    </span>
                  </div>
                </>
              );
            })}
            {inner && inner.length < 1 && (
              <div className="text-left text-sm text-text italic bg-background bg-opacity-80 rounded cursor-default transition-colors shadow-inset-custom p-1 pl-4 w-full">
                No {glazeType} found
              </div>
            )}
          </div>
        </div>
        <div className="text-left space-y-1">
          <span className="font-medium pointer-events-none pl-2 text-text capitalize">
            Outer {glazeType}
          </span>
          <div className="flex flex-col items-center justify-center gap-1 w-full">
            {outer?.map((glaze: string, i) => {
              return (
                <>
                  <div className="relative flex items-center justify-start w-full">
                    <span className="absolute right-2 w-4 px-1 bg-accent rounded shadow-inset-custom text-xs text-text font-medium text-center pointer-events-none">
                      {i + 1}
                    </span>
                    <span className="text-left bg-background rounded cursor-default hover:bg-opacity-75 transition-colors shadow-custom p-1 pl-4 w-full">
                      {glaze}
                    </span>
                  </div>
                </>
              );
            })}
            {outer && outer.length < 1 && (
              <div className="text-left text-sm text-text italic bg-background bg-opacity-80 rounded cursor-default transition-colors shadow-inset-custom p-1 pl-4 w-full">
                No {glazeType} found
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ArrayCellPopoverCard;
