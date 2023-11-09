import { FC } from 'react';
const Loading: FC = () => {
  return (
    <div className="flex items-center justify-center py-3">
      <div className="relative">
        <div className="h-8 w-8 rounded-full border-t-8 border-b-8 border-white"></div>
        <div className="absolute top-0 left-0 h-8 w-8 rounded-full border-t-8 border-b-8 border-gray-200 animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
