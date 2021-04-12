import React, { useState } from "react";
import background from "assets/wsg-bg.png";
import "./Trainee.scss";
import cx from "classnames";
import Facebook from "./Facebook";
import Twitter from "./Twitter";
import LinkedIn from "./LinkedIn";
import Instagram from "./Instagram";
import Youtube from "./Youtube";

const Trainee = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="trainee-bg">
      <img src={background} alt="wsg-background" useMap="#infoMap" />

      <map name="infoMap" className="circle-info">
        <area
          shape="circle"
          coords="217,201,30"
          alt="Sun"
          noref="true"
          onClick={() => setOpen(true)}
        />
      </map>

      <div className={cx("modal", { "is-active": isOpen })}>
        <div className="modal-background" onClick={() => setOpen(false)}></div>
        <div className="modal-card">
          <section className="modal-card-body">
            <h1 className="modal-title">SGUnited Traineeships Programme</h1>

            <p className="modal-subtitle mt-3">
              Gain valuable experience via traineeship opportunities!
            </p>
            <p className="modal-paragraph">
              If you are a student who has recently graduated or will soon be
              graduating from the Institute of Technical Education (ITE),
              polytechnics or universities, in 2019 to 2021, you may wish to
              apply for the SGUnited Traineeships Programme.
            </p>
            <p className="mt-3">
              The programme offers traineeship positions with a duration of up
              to six months aimed at helping you gain industry-relevant skills
              and build professional networks to boost your employability by the
              time hiring demand picks up.
            </p>
            <p className="modal-subtitle mt-3">Eligibility Criteria</p>
            <ul>
              <li>Singapore Citizen or Permanent Resident</li>
              <li>
                Graduated or graduating in calendar year 2019 to 2021 from ITE,
                polytechnics, universities and other educational institutions
                (e.g. private/overseas institutions).
              </li>
              <li>
                Graduated earlier from above institutions and completed National
                Service between 2019 to 2021.
              </li>
            </ul>
            <p className="modal-subtitle mt-4">Training Allowance</p>
            <p className="modal-paragraph">
              The Government will co-fund 80% of the training allowance, while
              the host organisation funds the remaining 20%. The monthly
              training allowance provided to each trainee varies depending on
              the traineeship scope and based on the traineeship qualifications
              appended below.
            </p>

            <p className="mt-4 has-text-weight-bold	">
              For Traineeships commencing before 1 Apr 2021:
            </p>

            <table className="has-text-centered">
              <thead>
                <tr>
                  <th>Job Scope, Based on Required Qualifications</th>
                  <th>University degree or above</th>
                  <th>Polytechnic diploma or professional qualifications</th>
                  <th>ITE or equivalent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Estimated Monthly Training Allowance</td>
                  <td>$1,800 - $2,500</td>
                  <td>$1,300 - $1,800</td>
                  <td>$1,100 - $1,500</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-4 has-text-weight-bold">
              For Traineeships commencing from 1 Apr 2021 onwards:
            </p>

            <table className="has-text-centered">
              <thead>
                <tr>
                  <th>Job Scope, Based on Required Qualifications</th>
                  <th>University degree or above</th>
                  <th>Polytechnic diploma or professional qualifications</th>
                  <th>ITE or equivalent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Estimated Monthly Training Allowance</td>
                  <td>$1,800 - $2,500</td>
                  <td>$1,700 - $2,100</td>
                  <td>$1,600 - $1,800</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-3">
              Note: The revised training allowance rates, will apply for new
              traineeships approved to commence from 1 April 2021 onwards
            </p>
            <p className="modal-subtitle mt-5">How to apply?</p>
            <p>
              Fresh graduates who are keen to apply for the traineeships may
              search “#SGUnitedTraineeships” under{" "}
              <a className="modal-subtitle" href="/">
                MyCareersFuture
              </a>
            </p>

            <p className="modal-subtitle mt-3">Find out more.</p>

            <div className="columns is-flex is-justify-content-center mt-6 mb-3">
              <Facebook />
              <Twitter />
              <LinkedIn />
              <Instagram />
              <Youtube />
            </div>
          </section>
        </div>

        <button
          className="modal-close is-large mt-3"
          onClick={() => setOpen(false)}
          aria-label="close"
        ></button>
      </div>
    </div>
  );
};

export default Trainee;
