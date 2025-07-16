import React from 'react';
import ReceptionIcon from '../../assets/Reception.png';
import HostIcon from '../../assets/Host.png';
import PeopleIcon from '../../assets/People.png';
import '../component.css';

const valueProps = [
  {
    icon: ReceptionIcon,
    text: (
      <>
        The guest pays<br />the same
      </>
    ),
  },
  {
    icon: HostIcon,
    text: (
      <>
        The host earns<br />the same
      </>
    ),
  },
  {
    icon: PeopleIcon,
    text: (
      <>
        The value stays in<br />the community
      </>
    ),
  },
];

const ValuePropsSection: React.FC = () => (
  <section className="valuePropsSection">
    <div className="valuePropsContainer">
      {valueProps.map((item, idx) => (
        <div className="valueProp" key={idx}>
          <img src={item.icon} alt="icon" className="valuePropIcon" />
          <div className="valuePropText">{item.text}</div>
        </div>
      ))}
    </div>
  </section>
);

export default ValuePropsSection; 