import { Metadata } from 'next';
import Button from '@/components/shared/button';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <div className='my-20 flex flex-col items-center text-center text-black'>
      <h1 className='text-primary -ml-1 text-2xl md:text-3xl font-light leading-none text-left'>Page Not Found</h1>
      <Button
        href='/'
        variant="default"
        size="default"
        className="mt-6"
      >
        Back To Home
      </Button>
    </div>
  );
}
