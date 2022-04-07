import { Link } from 'react-router-dom';
import { memo } from 'react';

type Props = {
  classLogo: string;
}

function Logo({classLogo}: Props): JSX.Element {
  return (
    <div className="logo">
      <Link className={classLogo} to="/">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default memo(Logo);
