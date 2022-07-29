import React from "react";
import styled from "styled-components";
import People from "./People";

const Head = styled.div`
  margin: 30px auto;
  & > h1 {
    /* padding: 10px; */
    text-align: center;
    margin: 0px auto;
    padding: 0px auto;
    color: rgb(70, 70, 70);
  }
`;

const Breakline = styled.hr`
  margin: 100px;
  height: 1px;
  background-color: #eee;
  border: none;
`;
const Flexbox = styled.div`
  display: flex;
  & > *{
      width: 50%;
  }
  & > :nth-child(1){
      padding-left: 150px;
      padding-right: 60px;
  }
  & > :nth-child(2){
      padding-right: 150px;
  }
`;

export default function About() {
  return (
    <div>
      
      <Head>
        <h1>We pioneered the discount broking model in India.</h1>
        <h1>Now, we are breaking ground with our technology.</h1>
      </Head>

      <Breakline />

      <Flexbox>
        <div>
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India in terms of active retail
            clients.
          </p>

          <p>
            Over 3+ million clients place millions of orders every day through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        <div>
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p>
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>

          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </Flexbox>

      <People/>
    </div>
  );
}
