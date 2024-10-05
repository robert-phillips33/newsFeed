/* eslint-disable react/prop-types */
import globe from '/src/assets/globe.svg';

// <----------------------------> <----------------------------> <----------------------------> <----------------------------> //
// <----------------------------> <----------------------------> <----------------------------> <----------------------------> //

const MainLayout = ({ children }) => {
  return (
    <main className='p-4 mt-6 m-4 mx-auto max-w-[1670px]'>
        <header className="flex flex-col items-center">
          <img src={globe} alt='News Reader Logo' className='h-40 w-auto' />
          <h1 className='text-center font-extrabold tracking-tighter text-6xl mt-2'>
          Earth News.
          </h1>
        </header>
        <section>
          {children}
        </section>
    </main>
  );
};

export default MainLayout;