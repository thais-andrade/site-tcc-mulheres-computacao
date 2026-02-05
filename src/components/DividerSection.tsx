import React from 'react';

type DividerProps = {
  width?: string;
};
const DividerSection = ({ width = 'w-2/5' }: DividerProps) => {
  return (
    <div className={`w-full mb-2`}>
      <div
        className={`h-1 mx-auto bg-primary ${width} opacity-25 my-0 py-0 rounded-t mb-2`}
      ></div>
    </div>
  );
};

export default DividerSection;
