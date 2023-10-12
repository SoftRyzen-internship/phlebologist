import classNames from 'classnames';

const TreatmentTabButton = ({ variant, data }) => {
  // console.log(data);

  const { name, description, slideNum, more } = data;

  const boxStyles = classNames({
    '': variant === 'light',
    '': variant === 'dark',
  });
  return (
    <div className={boxStyles}>
      <span className="smOnly:hidden">{slideNum}</span>
      <h3>{name}</h3>
      <p className="smOnly:hidden">{description}</p>
      <span className="notXl:hidden">{more}</span>
    </div>
  );
};

export default TreatmentTabButton;
