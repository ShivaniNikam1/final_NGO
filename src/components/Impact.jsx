import { FaBomb } from "react-icons/fa";
import "../pages/Home.css";
import impactimage from "../images/impact.png";
import styled from "styled-components";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const ImpactSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Image = styled.div`
  flex: 1;
  img {
    max-width: 100%;
    height: auto;
    padding-left: 30px;
  }
`;
const Number = styled.div`
  width: 4rem;
  height: 4rem;
  position: relative;
  top: -2rem;
  left: calc(50% - 2rem);
  background: #fff;
`;

const Columns = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: auto 0px;
`;

const Column = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 2px solid #40513b;
  border-radius: 8px;
  width: 600px;
  text-align: center;

  h4 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }
`;

// Usage in your React component
function Impact() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ImpactSection>
      <div className="container1">
        <div className="main__heading">
          <button className="main__icon">
            <FaBomb />
          </button>
          <h2>Impact made..</h2>
        </div>
        <div className="impact_section__content">
          <Image>
            <img src={"https://th.bing.com/th/id/OIP.A_YfvSXVpIfHc84mMM_MEwAAAA?pid=ImgDet&rs=1"} alt="Impact Image" />
          </Image>

          <Columns>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <Column>
                <Number>
                  <h4>
                    {counterOn && (
                      <CountUp start={0} end={49} duration={3} delay={0} />
                    )}
                  </h4>
                </Number>
                <p>Collabrations made Last year</p>
              </Column>
              <br />

              <Column>
                <Number>
                  <h4>
                    {counterOn && (
                      <CountUp start={0} end={509} duration={3} delay={0} />
                    )}
                  </h4>{" "}
                </Number>
                <p>Volunteers enrolled Last year</p>
              </Column>
              <br />

              <Column>
                <Number>
                  <h4>
                    {counterOn && (
                      <CountUp start={0} end={320} duration={3} delay={0} />
                    )}
                  </h4>{" "}
                </Number>
                <p>Maxiumum donations</p>
              </Column>
            </ScrollTrigger>
          </Columns>
        </div>
      </div>
    </ImpactSection>
  );
}

export default Impact;
