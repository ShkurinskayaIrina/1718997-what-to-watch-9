type Props = {
  error: string;
}

function ErrorMessage({error}: Props): JSX.Element | null {

  return (
    <div
      style={{
        position: 'fixed',
        top: '30px',
        right: '30px',
        padding: '10px',
        backgroundColor: '#d96666',
        color: 'white',
        borderRadius: '5px',
      }}
    >
      {error}
    </div>
  );

  return null;
}

export default ErrorMessage;
