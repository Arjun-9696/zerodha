import React from "react";
import styled from "styled-components";

const Head = styled.div`
  margin: 30px;
  & > * {
    text-align: center;
  }
`;

const Flexbox = styled.div`
  display: flex;
`;

const Team = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Left = styled.div`
  margin-left: 250px;
  margin-top: 40px;
  & > * {
    text-align: center;
  }
`;

const Limage = styled.img`
  width: 295px;
  border-radius: 50%;
`;

const SimageDiv = styled.div`
  margin: auto;
  text-align: center;
  padding: 50px;
  padding-bottom: 0px;
  width: 240px;
  & > :nth-last-child(1) {
    padding-top: 20px;
    text-align: left;
  }
`;

const Simage = styled.img`
  width: 250px;
  border-radius: 50%;
`;


const Right = styled.div`
  margin-left: 70px;
  margin-right: 200px;
  margin-top: 40px;
  & > * {
    text-align: left;
  }
  a {
    text-decoration: none;
    font-weight: 500;
    color: #1762c4;
    :hover {
      color: #555;
    }
  }
`;

const People=() =>{





  return (
    <>
      <Head>
        <h1>People</h1>
      </Head>

      <Flexbox>
        <Left>
          <Limage src="https://zerodha.com/static/images/nithin-kamath.jpg" alt="nithin-kamath.jpg" />
          <h3>Nithin Kamath</h3>
          <div>Founder, CEO</div>
        </Left>

        <Right>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He was named one of the “Top 10 Businessmen to Watch Out for in
            2016 in India” by The Economic Times for pioneering and scaling
            discount broking in India.
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="https://nithinkamath.me/">Home</a>/{" "}
            <a href="https://tradingqna.com/u/nithin/summary">TradingQnA</a> /{" "}
            <a href="https://twitter.com/Nithin0dha">Twitter</a>
          </p>
        </Right>
      </Flexbox>

      <Team>
        <SimageDiv
        >
          <Simage src="https://zerodha.com/static/images/Nikhil.jpg" alt="Nikhil" />
          <h3>Nikhil Kamath</h3>
          <div>{`Co-founder & CFO`}</div>
          <div>
          </div>
        </SimageDiv>

        <SimageDiv
          
        >
          <Simage src="https://zerodha.com/static/images/Kailash.jpg" alt="Nikhil.jpg" />
          <h3>Dr. Kailash Nadh</h3>
          <div>{`CTO`}</div>
          <div>
          </div>
        </SimageDiv>

        <SimageDiv
        >
          <Simage src="https://zerodha.com/static/images/Venu.jpg" alt="venu.jpg" />
          <h3>Venu Madhav</h3>
          <div>COO</div>
          <div>
          </div>
        </SimageDiv>

        <SimageDiv
          
        >
          <Simage src="https://zerodha.com/static/images/Hanan.jpg" alt="hanan" />
          <h3>Hanan Delvi</h3>
          <div>CCO</div>
          <div>
          </div>
        </SimageDiv>

        <SimageDiv
        >
          <Simage src="https://zerodha.com/static/images/Seema.jpg" alt="Seema" />
          <h3>Seema Patil</h3>
          <div>CQO</div>
          <div>
            
          </div>
        </SimageDiv>

        <SimageDiv
        >
          <Simage src="https://zerodha.com/static/images/karthik.jpg" alt="karthik" />
          <h3>Karthik Rangappa</h3>
          <div>Chief of Education</div>
          <div>
          </div>
        </SimageDiv>
        <SimageDiv style={{marginLeft:"30px"}}
        >
          <Simage src="https://zerodha.com/static/images/Austin.jpg" alt="Austin" />
          <h3>Austin Prakesh</h3>
          <div>{`Director Strategy`}</div>
          <div>
          </div>
        </SimageDiv>


      </Team>
    </>


);
        };

        export default People;
