import { TailSpin } from 'react-loader-spinner';
import { Wrap } from './Spinner.styled';

export const Spinner = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Wrap>
        <TailSpin
          height="60px"
          width="60px"
          color="#FF6B08"
          ariaLabel="loading"
        />
      </Wrap>
    </div>
  );
};
