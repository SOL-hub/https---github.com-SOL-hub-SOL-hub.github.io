/*eslint-disable*/
import './App.css';

import {Link, NavLink, Route, Switch, BrowserRouter} from 'react-router-dom';
import {Button} from 'react-bootstrap'


import parksol from './parksol.jpg';
import back1 from './BackEnd/back1.png';
import back2 from './BackEnd/back2.png';
import back3 from './BackEnd/back3.png';
import back4 from './BackEnd/back4.png';
import back5_1 from './BackEnd/back5_1.png';
import back6 from './BackEnd/back6.png';

import front1 from './FrontEnd/front1.png';
import front2 from './FrontEnd/front2.png';
import front3 from './FrontEnd/front3.png';
import front4 from './FrontEnd/front4.png';
import front6 from './FrontEnd/front6.png';
import front7 from './FrontEnd/front7.png';
import front8 from './FrontEnd/front8.png';
import svn from './Version/svn.png';

import Erdcloud from './Communication/Erdcloud.png';

import tistoryLogo from './tistoryLogo.png';
import salLong from './salLong.png';
import notionlogo from './notionlogo.png';
import tistory from './tistory.jpg';

import 보드살롱 from './project-image/보드살롱.png';
import houudoin from './project-image/houudoin.png';
import Protfolio from './project-image/Protfolio.png';
import DGIS from './project-image/DGIS.jpg';

import lawyer3 from './project-image/lawyer3.png';
import Oherp from './project-image/Oherp.png';
import { useState } from 'react';


function App() {

  let [NarBarTitle, NarBarTitleChange] = useState(['About Sol', 'Skills', 'Projects', 'Archiving', 'Programming Experience', 'Before Career'])

  let [AboutSol, AboutSolKind] = useState(['박 솔', '서울시 동작구', '상도역', '노량진역', '봉천역', '94.03.17','010-5267-2407', 'thfdl0317@naver.com']);

  return (
    <div className="App">
  <div className='NavBackGround'>
    <div className='Protfolio' onClick={()=>{window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}>SOL's Protfolio</div>
      <div className='NarBar'>
          {['About Sol', 'Skills', 'Projects', 'Archiving', 'Programming Experience', 'Before Career'].map((NarBarTitle) => (
            <div
              mode="main"
              onClick={() => {
                window.scrollTo({
                  top: document.getElementById(NarBarTitle).offsetTop,
                  behavior: 'smooth',
                });
              }}
            >
              {NarBarTitle}
            </div>
          ))}
        </div>
        {['About Sol', 'Skills', 'Projects', 'Archiving', 'Programming Experience', 'Before Career'].map((NarBarTitle) => (
          
          
          <div className='list' id={NarBarTitle} key={NarBarTitle}>
          </div>

          
        ))}
    </div>
<div className='ProTitle'>
  <h3>박 솔</h3>
  <p>웹 개발자 SOL's 포토폴리오</p>
  <hr className='ProHr'/>
  <p className='HrContent'>안녕하십니까<br/>프론트단공부가 취미인 백엔드 개발자입니다.<br/> 엎치락뒤치락해도 목표까지 묵묵히 도전하는 습관이 저의 강점입니다.</p>
  <button className='ProBtn' id={NarBarTitle}>자세히 알아보기<br/></button>
</div>

<div className='AboutSol'>
  <div className='AboutTitle' id={NarBarTitle} key={NarBarTitle}>
  {NarBarTitle[0]} <i class="fab fa-pagelines"></i></div>
   <hr className='ProHr'/>
    <div className='row'>

        <div className='col-md-4'>
              <div className='parksol'>
                  <img src={parksol} width='350' height='340' alt='parksol'/>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='box'>
           <i class="fas fa-user-check fa-2x" ></i> NAME<br/>{AboutSol[0]}
          </div>
        </div>
        
        <div className='col-md-4'>
        <div className='box'>
          <i class="fas fa-subway fa-2x"></i> ADDRESS <br/>{AboutSol[1]}<br/>
            <p>(근처 지하철)</p>
            <div className='subway'>
            <div className='subway1'>{AboutSol[2]}</div>
            <div className='subway2'>{AboutSol[3]}</div>
            <div className='subway3'>{AboutSol[4]}</div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
        <div className='box'>
          <i class="fas fa-birthday-cake fa-2x"></i> BIRTH <br/>{AboutSol[5]}</div>
        </div>
        
        <br/><br/>
        <div className='col-md-4'>
          <div className='box'>
            <i class="fas fa-mobile-alt fa-2x"></i> TEL <br/>{AboutSol[6]}
            </div>
          </div>
        <div className='col-md-4'>
        <div className='box'>
        <i class="fas fa-envelope fa-2x"></i> E-MAIL <br/>{AboutSol[7]}</div>
        </div>
    </div>
</div>

<div className='Skills' id={NarBarTitle} key={NarBarTitle}>
  <div className='AboutTitle'>{NarBarTitle[1]} <i class="fab fa-pagelines"></i></div>
   <hr className='ProHr'/>
    <div className='row'>
        <div className='col-md-3'><p1>Back-end</p1></div>
        <div className='col-md-3'><p2>Front-end</p2></div>
        <div className='col-md-3'><p2>Version Control</p2></div>
        <div className='col-md-3'><p2>Commnuication</p2></div>
    </div>

    <div className='BackEnd'>
      <div className='row'>
              <div className='col-md-2'>
                  <div className='back1'>Eclipse<br/>
                    <img src={back1}width='80' height='80' alt='back1'/>
                  </div>
              </div>
              <div className='col-md-2'>
                  <div className='back1'>Spring<br/>
                    <img src={back2} width='80' height='80' alt='back2'/>
                </div>
              </div>
              <div className='col-md-2'>
                  <div className='back1'>DBeaver<br/>
                    <img src={back3} width='80' height='80' alt='back3'/>
                </div>
              </div>
              <div className='col-md-2'>
                  <div className='back1 font'>HeidiSQL<br/>
                    <img src={back4} width='80' height='80' alt='back4'/>
                </div>
              </div>
              <div className='col-md-2'>
                  <div className='back1'>Spring boot<br/>
                    <img src={back5_1} width='80' height='80' alt='back5_1'/>
                </div>
              </div>
              <div className='col-md-2'>
                  <div className='back1'>MySQL<br/>
                    <img src={back6} width='80' height='80' alt='back6'/>
                </div>
              </div>

    </div>
  </div>
      <div className='SkillPadding'></div>

        <div className='row'>
            <div className='col-md-3'><p2>Back-end</p2></div>
            <div className='col-md-3'><p1>Front-end</p1></div>
            <div className='col-md-3'><p2>Version Control</p2></div>
            <div className='col-md-3'><p2>Commnuication</p2></div>
        </div>

        <div className='FrontEnd'>
        <div className='row'>
                <div className='front1'>HTML<br/>
                  <img src={front1}width='80' height='80' alt='front1'/>
                </div>
                <div className='front1'>CSS<br/>
                  <img src={front2} width='80' height='80' alt='front2'/>
                </div>
                <div className='front1'>JS ES6<br/>
                  <img src={front3} width='80' height='80' alt='front3'/>
                </div>
                <div className='front1'>TypeScript<br/>
                  <img src={front4} width='80' height='80' alt='front4'/>
                </div>
                <div className='front1'>React<br/>
                  <i class="fab fa-react fa-3x"></i>
                </div>
                <div className='front1'>Redux<br/>
                  <img src={front6} width='80' height='80' alt='front6'/>
        </div>
        
            <div className='front1'>Sass<br/>
              <img src={front7} width='80' height='80' alt='front7'/>
            </div>

            <div className='front1'>JQUERY<br/>
              <img src={front8} width='80' height='80' alt='front8'/>
            </div>
        </div>
    
      </div>

  <div className='SkillPadding'></div>

  <div className='row'>
        <div className='col-md-3'><p2>Back-end</p2></div>
        <div className='col-md-3'><p2>Front-end</p2></div>
        <div className='col-md-3'><p1>Version Control</p1></div>
        <div className='col-md-3'><p2>Commnuication</p2></div>
    </div>

    <div className='VersionControl'>
      <div className='row'>
              <div className='col-md-4'>
                  <div className='verion1'>GitHub<br/>
                  <i class="fab fa-github fa-3x"></i>
                  </div>
              </div>
              <div className='col-md-4'>
                  <div className='verion1'>SVN<br/>
                    <img src={svn} width='80' height='80' alt='svn'/>
                </div>
              </div>
              <div className='col-md-4'>
                  <div className='verion1'>Git<br/>
                  <i class="fab fa-git-alt fa-3x"></i>
                </div>
              </div>
     </div>
     </div>

     <div className='SkillPadding'></div>

     <div className='row'>
        <div className='col-md-3'><p2>Back-end</p2></div>
        <div className='col-md-3'><p2>Front-end</p2></div>
        <div className='col-md-3'><p2>Version Control</p2></div>
        <div className='col-md-3'><p1>Commnuication</p1></div>
    </div>

    <div className='VersionControl'>
      <div className='row'>
              <div className='col-md-4'>
                  <div className='verion1'>slack<br/>
                  <i class="fab fa-slack fa-3x"></i>
                  </div>
              </div>
              <div className='col-md-4'>
                  <div className='verion1'>Erdcloud<br/>
                    <img src={Erdcloud} width='80' height='80' alt='Erdcloud'/>
                </div>
              </div>
              <div className='col-md-4'>
                  <div className='verion1'>figma<br/>
                  <i class="fab fa-figma fa-3x"></i>
                </div>
              </div>
     </div>
     </div>
  </div>



<div className='Project'>
  <div className='ProjectTitle' id={NarBarTitle} key={NarBarTitle}>{NarBarTitle[2]} <i class="fab fa-pagelines"></i></div>
    <hr className='ProHr'/><br/><br/>
  <div className='ProjectContent'>
    <div className='proMiniTitle'>
      <h3>보드살롱 보드게임중고거래 사이트</h3>
        <p>2022년03월(7인 사이드 프로젝트)</p>
    </div>
    <div className='ProImg'>
        <img src={보드살롱} width='630' height='310' alt='보드살롱'/>
    </div>

    <div className='ProContent'>
        <div className='siteContent'>
        현업에 종사하는 기획자, 디자이너, 마케팅, <br/>
        개발자들이 모여 진행하고 있는 MVP 서비스 중고거래 플랫폼을 개발 중입니다.<br/>
        <br/>
        React와 Typescript를 사용하여 UI를 구현, <br/>
        팀 블로그 형태로 운영 중이며, 초기 기획부터 런칭까지의 절차를 밟으며 협업할 때의 알아야할 다양한 지식, 정보를 배울 수 있었던 프로젝트였습니다.
      
       </div>
        <hr/>
        <div className='siteSkill'>        
      <div className='siteSkillHeader'> 
      <ul>
        <li><i class="fas fa-fill-drip"></i> 주요기능</li>
        <li><i class="fas fa-fill-drip"></i> Front-end</li>
        <li><i class="fas fa-fill-drip"></i> Back-end</li>
        <li><i class="fas fa-fill-drip"></i> 블로그</li>
        <li><i class="fas fa-fill-drip"></i> 사이트</li>
      </ul>
      </div>

      <div className='siteSkillBody'>
       <ul>
                <li>검색/필터/구매문의</li>
                <li>React, TypeScript</li>
                <li>SpringBoot, Java, MySQL</li>
                <li>https://blog.naver.com/boardgetddo_team/</li>
                <li>https://blog.naver.com/boardgetddo_team/</li>
              </ul>
      </div>
    </div>
    </div>
    
    <br/>
  </div>
  
</div>

<div className='Project'>
  <div className='ProjectContent'>
    <div className='proMiniTitle'>
      <h3>Protfolio 웹 사이트</h3>
        <p>2022년01월(1인 개인프로젝트)</p>
    </div>
    <div className='ProImg'>
        <img src={Protfolio} width='630' height='315' alt='Protfolio'/>
        

    </div>
    
    <div className='ProContent'>
        <div className='siteContent'>
        지금 보시는 웹사이트가 해당 사이트이며 <br/>
        React에 배웠던 것을 활용하며 
        레이아웃을 작업, TypeScript와 Sass를 사용하면서 프론트엔드 개발을 더 깊숙히
        경험할 수 있던 프로젝트입니다.
        </div>

        <hr/>

        <div className='siteSkill'>        
      <div className='siteSkillHeader'> 
      <ul>
        <li><i class="fas fa-fill-drip"></i> 주요기능</li>
        <br/><br/>
        <li><i class="fas fa-fill-drip"></i> Front-end</li>
        
        <li><i class="fas fa-fill-drip"></i> Git-hub</li>
      </ul>
      </div>

      <div className='siteSkillBody'>
       <ul>
                <li>자기소개, 인적 사항, 보유 기술, 프로젝트/교육 경험, 업무 경력, 활동사이트등을 간단히 소개</li>
                <li>React, TypeScript, SASS</li>
                <li className='git'>https://github.com/SOL-hub/SOL-sProtfolio</li>
              </ul>
      </div>
    </div>
    </div>
    
    <br/>
  </div>
</div>
<div className='Project'>
  <div className='ProjectContent'>
    <div className='proMiniTitle'>
      <h3>DGIS</h3>
        <p>2021년07월 (주)소프트엔 - 프로젝트</p>
    </div>
    <div className='ProImg'>
        <img src={DGIS} width='580' height='315' alt='DGIS'/>

        
    </div>

    <div className='ProContent'>
        <div className='siteContent'>
        통신서비스를 설치한 곳의 시설현황, 가공거리, 간성망 등을 검색, 조회하는 웹 사이트입니다. <br/>
        <br/>각 목차별 UI들의 레이아웃을 제이쿼리와 CSS로 구현하며 웹 서비스에 주요 기능들을 나타낼 때 직관적인 사용을 할 수 있도록 구성할 수 있는 기본적인 문법들을 배울 수 있었습니다. <br/>
        
        <br/>
        각 UI마다의 기능들을 모듈화하는 방식, mybatis의 sql을 가져와 수정, 조회하며 MVC패턴의 흐름을 실무에서 깊이 파악할 수 있었고 
        
        <br/>
        ajax인 비동기적 통신방식으로 새로 로딩없이 원하는 데이터만 보여줄 수 있게 구현하는 방법을 자세히 배울 수 있었던 경험이었습니다.
        </div>

        <hr/>

        <div className='siteSkill'>        
      <div className='siteSkillHeader'> 
      <ul>
        <li><i class="fas fa-fill-drip"></i> 주요기능</li>
        <li><i class="fas fa-fill-drip"></i> Front-end</li>
        <li><i class="fas fa-fill-drip"></i> Back-end</li>
        <li><i class="fas fa-fill-drip"></i> Git-hub</li>
      </ul>
      </div>

      <div className='siteSkillBody'>
       <ul>
                <li>검색/필터/구매문의</li>
                <li>JQUERY, HTML, CSS</li>
                <li>Eclipse, Java, MYSQL</li>
                <li>https://github.com/bogusipda</li>
              </ul>
      </div>
    </div>
    </div>
    
    <br/>
  </div>
</div>
<div className='Project'>
  <div className='ProjectContent'>
    <div className='proMiniTitle'>
      <h3>사기꾼 잡는 변호사</h3>
        <p>2021년 06월 (주)소프트엔 - 프로젝트 </p>
    </div>
    <div className='ProImg'>
      <img src={lawyer3} width='602' height='305' alt='lawyer3'/>

    </div>
    
    <div className='ProContent'>
        <div className='siteContent'>
        상담을 웹, 앱으로 간편하게 진행 할 수 있는 변호사 상담 사이트입니다. <br/>
        ERD설계와 클라이언트의 수정사항을 직접 UI기획 기획서를 작업하며 진행하며 유저들에게 보다 편리한 기능을 제공하는 것이 우선으로 진행하며, 
        <br/>
        <br/>UI의 화면에 기능들이 잘 배치되어질 수 있도록하기 위해 논의하며 사이트를 만들 때
        중요한 순위와 코드 작성 시 <br/>기획과 기능구현 전 유스케이스의 중요성을 인식하며 개발할 때 불필요 데이터들을 줄일 수 있었으며 
        <br/><br/>
        MVP패턴으로 개발하며 상담신청부터 상담조회까지 CRUD 기능을 구현, 기존에 알던 방식과는 다른 JQuery 방식을 사용하며 지식범위를 넓힐 수 있었던 프로젝트였습니다.
        </div>

        <hr/>

        <div className='siteSkill'>        
      <div className='siteSkillHeader'> 
      <ul>
        <li><i class="fas fa-fill-drip"></i> 주요기능</li>
        <li><i class="fas fa-fill-drip"></i> Front-end</li>
        <li><i class="fas fa-fill-drip"></i> Back-end</li>
        <li><i class="fas fa-fill-drip"></i> Git-hub</li>
      </ul>
      </div>

      <div className='siteSkillBody'>
       <ul>
                <li>상담예약, 관리자 승인/거절 선택에 따라 상담진행/상담내역확인</li>
                <li>JQuery, HTML, CSS</li>
                <li>Eclipse, Java, HeidiSQL</li>
                <li><Link to="https://devlop.senkorea.com:61238/intrcn/intrcnView.do">김기용 변호사</Link></li>
                <li><Route path="https://devlop.senkorea.com:61238/intrcn/intrcnView.do">김기용 변호사</Route></li>
              </ul>
      </div>
    </div>
    </div>
    
    <br/>
  </div>
</div>

<div className='Project'>
  <div className='ProjectContent'>
    <div className='proMiniTitle'>
      <h3>Oherp!</h3>
        <p>2020년08월(5인 개인프로젝트) </p>
    </div>
    <div className='ProImg'>
        <img src={Oherp} width='602' height='315' alt='Oherp'/>
    </div>
    
    <div className='ProContent'>
        <div className='siteContent'>
        인사관리를 위한 통합 솔루션을 주제로, 사원들의 근태관리, 출퇴근, 휴가, 급여 등의 관리와 커뮤니티, 기록형 웹 사이트를 만들었습니다. 
        <br/>
        <br/>
        spring에 필요한 설정파일, 라이브러리 등록하는 것에 시간이 많이 소요되었지만 프레임워크의 사용방법과 이클립스와 다른 DB연결 방법 등으로 spring의 장점을 알아갈 수 있었으며,
        <br/>
        실제 웹 화면과 유사한 기능을 제이쿼리로 구현하려면 어떻게 해야하는지에 대해 검색하며 익숙해지며 페이지 상황에 맞는 SQL를 구상하며 진행한 프로젝트였습니다.
        </div>

        <hr/>

        <div className='siteSkill'>        
      <div className='siteSkillHeader'> 
      <ul>
        <li><i class="fas fa-fill-drip"></i> 주요기능</li>
        <li><i class="fas fa-fill-drip"></i> Front-end</li>
        <li><i class="fas fa-fill-drip"></i> Back-end</li>
        <li><i class="fas fa-fill-drip"></i> Git-hub</li>
      </ul>
      </div>

      <div className='siteSkillBody'>
       <ul>
                <li>검색/필터/구매문의</li>
                <li>React, TypeScript</li>
                <li>SpringBoot, Java, MySQL</li>
                <li>https://github.com/bogusipda</li>
                
              </ul>
      </div>
    </div>
    </div>
    
    <br/>
  </div>
</div>

<div className='Project'>
  <div className='ProjectContent'>
    <div className='proMiniTitle'>
      <h3>houudoin</h3>
        <p>2020년07월 (6인 개인프로젝트)</p>
    </div>
    <div className='ProImg'>
        <img src={houudoin} width='520' height='300' alt='houudoin'/>

    </div>

    
    <div className='ProContent'>
        <div className='siteContent'>
        일반적인 가구 판매를 넘어 우리집의 인테리어 견적을 믿고 맡길 수 있는 토탈 인테리어 솔루션을 제공하는 사이트
        </div>

        <hr/>

        <div className='siteSkill'>        
      <div className='siteSkillHeader'> 
      <ul>
        <li><i class="fas fa-fill-drip"></i> 주요기능</li>
        <li><i class="fas fa-fill-drip"></i> Front-end</li>
        <li><i class="fas fa-fill-drip"></i> Back-end</li>
        <li><i class="fas fa-fill-drip"></i> 도메인</li>
        <li><i class="fas fa-fill-drip"></i> Git-hub</li>
      </ul>
      </div>

      <div className='siteSkillBody'>
       <ul>
                <li>필터 기능 후 제품 제공/구매/포인트 적립</li>
                <li>JavaScript</li>
                <li>Eclipse, Java, DBeaver</li>
                <li>http://www.sysout.co.kr/houudoin/</li>
                <li>https://github.com/SOL-hub/semi</li>
              </ul>
      </div>
    </div>
    </div>
    
    <br/>
  </div>
  <br/><br/><br/>
</div>

<div className='Archiving'>
    <div className='ArcTitle' id={NarBarTitle[3]} key={NarBarTitle[3]}>{NarBarTitle[3]} <i class="fab fa-pagelines"></i></div>
      <hr className='ProHr'/><br/><br/>
        <div className='ArcContent'>
          <i class="fab fa-github-square fa-8x"></i>
          <br/>
            <a href='https://github.com/SOL-hub'>https://github.com/SOL-hub</a>
            <hr/>  
            <h5>소스 코드 저장공간</h5>
          <ul>
            <li><i class="fas fa-check"></i> 혼자 배운 코딩들 정리용, 연습용 소스 코드</li>
            <li><i class="fas fa-check"></i> 프로젝트 팀과 공유용 소스 코드 </li>
            <li><i class="fas fa-check"></i> 개발 교육 당시 배운 내용정리</li>
          </ul>
          </div>
        

        <div className='ArcContent'>
          <img src={notionlogo} width='252' height='128' alt='notionlogo'/>
          <a href='https://www.notion.so/ko-kr'>https://www.notion.so/ko-kr</a>
          <hr/>
          <h5>프로그래밍 언어 공부 정리</h5>
          <ul>
            <li><i class="fas fa-check"></i> 공부내용들 상세 정리(복습용)</li>
            <li><i class="fas fa-check"></i> 개발을 시작하며 진행한 프로젝트 코드 기록</li>
            <li><i class="fas fa-check"></i> 프로젝트 팀원과 진행한 회의 및 정보 공유</li>
          </ul>
        </div>

        <div className='ArcContent'>
           <img src={salLong} width='290' height='128'alt='salLong'/>
           <a href='https://blog.naver.com/boardgetddo_team'>https://blog.naver.com/boardgetddo_team</a>
           <hr/>
            <h5>'보드살롱' 블로그</h5>
          <ul>
            <li><i class="fas fa-check"></i> 서비스 출시 전 관심 유저를 위한 홍보 활동</li>
            <li><i class="fas fa-check"></i> 사이드프로젝트/IT관련 업계 사람 관심유도</li>
            <li><i class="fas fa-check"></i> IT관련 정보, 프로젝트의 진행 상황 공유</li>
          </ul>
        </div>
        <div className='ArcContent'>
        <img src={tistory} width='280' height='128'alt='tistory'/>
        <a href='https://blog.naver.com/thfdl0317'> https://blog.naver.com/thfdl0317</a>
        <hr/>
            <h5>지식공유, 공부정리 목적의 블로그</h5>
              <ul>
                <li><i class="fas fa-check"></i> 개발 중 겪는 오류에 대한 해결방법 정리</li>
                <li><i class="fas fa-check"></i> 프로젝트를 하며 배운 코드 자료 정리</li>
                <li><i class="fas fa-check"></i> 개발을 시작하면서 배운 웹 관련 지식 공유</li>
              </ul>
        </div>
  </div>

<div className='Experience'>
            <div className='ProjectTitle' id='NarBarTitle'>{NarBarTitle[4]} <i class="fab fa-pagelines"></i></div>
              <hr className='ProHr'/><br/><br/>
            <div className='ExperienceContent'>
                    <div className='ExperienceContent1'>
                      <h4>프로그래밍 교육</h4>
                    <h5><i class="fas fa-edit"></i> 교육기관 : KH정보교육원(당산점)</h5>
                    <h5><i class="fas fa-edit"></i> 교육기간 : 20.04.16~20.09.23</h5>
                    <h5><i class="fas fa-edit"></i> 교육과목 : 디바이스&웹 콘텐츠 융합 디지털 컨버전스 양성과정(2)</h5>
                      <h5><i class="fas fa-edit"></i> 교육내용 </h5>
                        <p>- ORACLE SQL Programming, DB 기본부터 활용까지</p>
                        <p>- JAVA/ Servlet / JSP, jdbc/Spring Framework, Mybatis, Ajax</p>
                        <p>- HTML / CSS / JavaScript/JQuery</p>
                        <p>- 세미, 파이널팀 프로젝트 MVP패턴으로 진행</p>

                    </div>
                  
                    <div className='ExperienceContent2'>
                    <h4>팀프로젝트 & 개인적 개발공부목록(최신 기록)</h4>
                    <h5><i class="fas fa-edit"></i> 팀프로젝트 : 사이드프로젝트(보드게임 중고거래 플랫폼)</h5> 
                                                                <p>- 프론트엔드 REACT + typescript 개발</p>
                    <h5><i class="fas fa-edit"></i> 개인적으로 공부하고 있는 프로그래밍 언어들</h5>
                        <p>- Spring Boot (인프런 코딩강의)</p>
                        <p>- JavaScript 객체지향 & ES6 신문법</p>
                        <p>- React + typescript + Redux 활용</p>
                        <p>- 정보처리기사 실기 시험준비 중</p>
                    </div>
           
            </div>
            
          </div>

<div className='BeforeCareer'>
    <div className='ProjectTitle' id='NarBarTitle'>{NarBarTitle[5]} <i class="fab fa-pagelines"></i></div>
      <hr className='ProHr'/><br/><br/>
    <div className='ExperienceContent'>
            <div className='BeforeCareerContent1'>
             
            
    <h5>이전 경력<i class="fas fa-briefcase fa-2x"></i></h5> 
      <h5>
      ㈜ 소프트엔 - 개발본부 
      </h5>
      <p>- 근무기간 : 2020년 11월~2021년 11월</p>
      <p>- 프로젝트 개발, UI상세설계서 작업, 일본어번역 등</p>

      <h5>인피니티 - 영업부</h5>

      <p>- 근무기간 : 2018년 05월~2019년 10월</p>
      <p>- 업무내용 : 일본회사와 거래 및 견적상담, 번역, 수주 및 발주관리</p>

       </div>

      <div className='BeforeCareerContent2'>
             
            
    <h5><i class="fas fa-plane fa-2x"></i> 이전 활동</h5> 
    <h5>일본 유학 교환학생 & 워킹홀리데이 (약 2년)</h5>

      <p>- 한국어 강사(나고야), 리조또 파견사원(오사카 및 아와지시마)</p>
      <p>- 국제 문화교류센터 통역 및 중,고등학교 한국 소개활동 등<br/>
      (시코쿠 마쯔야마)</p>

    <h5><i class="fas fa-user-graduate fa-2x"></i> 평택대학교 광고홍보학과 졸업</h5>

      <p>- 재학기간 : 2013년 3월 ~ 2018년 8월</p>
</div>
</div>
</div>

      <div className='Final'>
          <div className='FinalIcons'>

              <div className='Icons'>
                <h4><i class="fab fa-github fa-4x"></i></h4>
              </div>
              <div className='Icons'>
                <h4><img src={tistoryLogo} width='96' height='96' alt='tistoryLogo'/></h4>
              </div>
              <div className='Icons'>
                <h4><i class="fab fa-facebook fa-4x"></i></h4>
              </div>

             
          </div>
          
          <div className='FinalIcons2'>
            <h5><i class="far fa-copyright"></i>2022. SOL PARK. All rights reserved. </h5>
          </div>
          </div>
</div>
  );
}

//다른 컴포넌트
function Skill(){
  return(
    <div className='Skills'>
  <div className='AboutTitle'>Skills<i class="fas fa-leaf"></i></div>
   <hr className='ProHr'/>
    <div className='row'>
        <div className='col-md-3'><p1>Back-end</p1></div>
        <div className='col-md-3'><p2>Front-end</p2></div>
        <div className='col-md-3'><p2>Version Control</p2></div>
        <div className='col-md-3'><p2>Commnuication</p2></div>
    </div>

    <div className='BackEnd'>
      <div className='row'>
              <div className='col-md-2'>
                  <div className='back1'>Eclipse<br/>
                    <img src={back1}width='80' height='80' alt='back1'/>
                  </div>
              </div>
              <div className='col-md-2'>
                  <div className='back1'>Spring<br/>
                    <img src={back2} width='80' height='80' alt='back2'/>
                </div>
              </div>
              <div className='col-md-2'>
                  <div className='back1'>DBeaver<br/>
                    <img src={back3} width='80' height='80' alt='back3'/>
                </div>
              </div>
              <div className='col-md-2'>
                  <div className='back1 font'>HeidiSQL<br/>
                    <img src={back4} width='80' height='80' alt='back4'/>
                </div>
              </div>
              <div className='col-md-2'>
                  <div className='back1'>GitHub<br/>
                    <img src={back5} width='80' height='80' alt='back5'/>
                </div>
              </div>
              <div className='col-md-2'>
                  <div className='back1'>GitHub<br/>
                    <img src={back6} width='80' height='80' alt='back6'/>
                </div>
              </div>

    </div>
  </div>
      <div className='SkillPadding'></div>

        <div className='row'>
            <div className='col-md-3'><p2>Back-end</p2></div>
            <div className='col-md-3'><p1>Front-end</p1></div>
            <div className='col-md-3'><p2>Version Control</p2></div>
            <div className='col-md-3'><p2>Commnuication</p2></div>
        </div>

        <div className='FrontEnd'>
        <div className='row'>
                <div className='front1'>HTML<br/>
                  <img src={front1}width='80' height='80' alt='front1'/>
                </div>
                <div className='front1'>CSS<br/>
                  <img src={front2} width='80' height='80' alt='front2'/>
                </div>
                <div className='front1'>JS ES6<br/>
                  <img src={front3} width='80' height='80' alt='front3'/>
                </div>
                <div className='front1'>TypeScript<br/>
                  <img src={front4} width='80' height='80' alt='front4'/>
                </div>
                <div className='front1'>React<br/>
                  <i class="fab fa-react fa-3x"></i>
                </div>
                <div className='front1'>Redux<br/>
                  <img src={front6} width='80' height='80' alt='front6'/>
        </div>
        
            <div className='front1'>Sass<br/>
              <img src={front7} width='80' height='80' alt='front7'/>
            </div>

            <div className='front1'>JQUERY<br/>
              <img src={front8} width='80' height='80' alt='front8'/>
            </div>
        </div>
    
      </div>

  <div className='SkillPadding'></div>

  <div className='row'>
        <div className='col-md-3'><p2>Back-end</p2></div>
        <div className='col-md-3'><p2>Front-end</p2></div>
        <div className='col-md-3'><p1>Version Control</p1></div>
        <div className='col-md-3'><p2>Commnuication</p2></div>
    </div>

    <div className='VersionControl'>
      <div className='row'>
              <div className='col-md-4'>
                  <div className='verion1'>GitHub<br/>
                  <i class="fab fa-github fa-3x"></i>
                  </div>
              </div>
              <div className='col-md-4'>
                  <div className='verion1'>SVN<br/>
                    <img src={svn} width='80' height='80' alt='svn'/>
                </div>
              </div>
              <div className='col-md-4'>
                  <div className='verion1'>Git<br/>
                  <i class="fab fa-git-alt fa-3x"></i>
                </div>
              </div>
     </div>
     </div>

     <div className='SkillPadding'></div>

     <div className='row'>
        <div className='col-md-3'><p2>Back-end</p2></div>
        <div className='col-md-3'><p2>Front-end</p2></div>
        <div className='col-md-3'><p2>Version Control</p2></div>
        <div className='col-md-3'><p1>Commnuication</p1></div>
    </div>

    <div className='VersionControl'>
      <div className='row'>
              <div className='col-md-4'>
                  <div className='verion1'>slack<br/>
                  <i class="fab fa-slack fa-3x"></i>
                  </div>
              </div>
              <div className='col-md-4'>
                  <div className='verion1'>Erdcloud<br/>
                    <img src={Erdcloud} width='80' height='80' alt='Erdcloud'/>
                </div>
              </div>
              <div className='col-md-4'>
                  <div className='verion1'>figma<br/>
                  <i class="fab fa-figma fa-3x"></i>
                </div>
              </div>
     </div>
     </div>
  </div>
  )
}

function Archiving(){
  return (
    <div className='Archiving'>
    <div className='ArcTitle'>Archiving</div>
      <hr className='ProHr'/><br/><br/>
        <div className='ArcContent'>
          <i class="fab fa-github-square fa-8x"></i>
          <br/>
            <a href='https://github.com/SOL-hub'>https://github.com/SOL-hub</a>
            <hr/>  
            <h5>소스 코드 저장공간</h5>
          <ul>
            <li><i class="fas fa-check"></i> 혼자 배운 코딩들 정리, 기록용 소스 코드</li>
            <li><i class="fas fa-check"></i> 프로젝트 팀과 공유용 소스 코드</li>
            <li><i class="fas fa-check"></i> 개발 교육 당시 배운 내용정리 및 소스 코드 </li>
          </ul>
          </div>
        

        <div className='ArcContent'>
          <img src={notionlogo} width='252' height='128' alt='notionlogo'/>
          <a href='https://www.notion.so/ko-kr'>https://www.notion.so/ko-kr</a>
          <hr/>
          <h5>프로그래밍 언어 공부 정리</h5>
          <ul>
            <li><i class="fas fa-check"></i> 잊지 않고 기억할 공부내용 상세 정리</li>
            <li><i class="fas fa-check"></i> 웹 개발을 시작하며 진행한 프로젝트, <br/>코드 기록</li>
            <li><i class="fas fa-check"></i> 프로젝트 팀원과 함께 진행하는과정 및 정보 공유</li>
          </ul>
        </div>

        <div className='ArcContent'>
           <img src={salLong} width='290' height='152'alt='salLong'/>
           <a href='https://blog.naver.com/boardgetddo_team'>https://blog.naver.com/boardgetddo_team</a>
           <hr/>
            <h5>'보드살롱' 블로그</h5>
          <ul>
            <li><i class="fas fa-check"></i> 서비스 출시 전 관심 유저를 위한 홍보 활동</li>
            <li><i class="fas fa-check"></i> 사이드프로젝트/IT관련 업계 사람 관심유도</li>
            <li><i class="fas fa-check"></i> IT관련 정보, 프로젝트의 진행 상황 공유</li>
          </ul>
        </div>
        <div className='ArcContent'>
        <img src={tistory} width='280' height='128'alt='tistory'/>
        <a href='https://blog.naver.com/thfdl0317'> https://blog.naver.com/thfdl0317</a>
        <hr/>
            <h5>지식공유, 공부정리 목적의 블로그</h5>
              <ul>
                <li><i class="fas fa-check"></i> 개발 중 겪은 오류, 당신만은..쉽게 풀어라. <br/>오류에 대한 해결방법 정리</li>
                <li><i class="fas fa-check"></i> 프로젝트를 하며 배운 코드 기록 및 자료 정리</li>
                <li><i class="fas fa-check"></i> 웹 개발을 시작하면서 배운 웹 관련 지식 공유</li>
              </ul>
        </div>
  </div>
  )
}

function ProgrammingExperience(){
  return (
    <div className='Experience'>
            <div className='ProjectTitle' id={NarBarTitle} key={NarBarTitle}><i class="fas fa-leaf"></i>Programming Experience</div>
              <hr className='ProHr'/><br/><br/>
            <div className='ExperienceContent'>
                    <div className='ExperienceContent1'>
                      <h4>프로그래밍 교육</h4>
                    <h5><i class="fas fa-edit"></i> 교육기관 : KH정보교육원(당산점)</h5>
                    <h5><i class="fas fa-edit"></i> 교육기간 : 20.04.16~20.09.23</h5>
                    <h5><i class="fas fa-edit"></i> 교육과목 : 디바이스&웹 콘텐츠 융합 디지털 컨버전스 양성과정(2)</h5>
                      <h5><i class="fas fa-edit"></i> 교육내용 </h5>
                        <p>- ORACLE SQL Programming, DB 기본부터 활용까지</p>
                        <p>- JAVA/ Servlet / JSP, jdbc/Spring Framework, Mybatis, Ajax</p>
                        <p>- HTML / CSS / JavaScript/JQuery</p>
                        <p>- 세미, 파이널팀 프로젝트 MVP패턴으로 진행</p>

                    </div>
                  
                    <div className='ExperienceContent2'>
                    <h5>팀프로젝트 & 개인 개발공부목록(최신기록)</h5>
                    <h5><i class="fas fa-edit"></i> 팀프로젝트 : 사이드프로젝트(보드게임 중고거래 플랫폼)</h5> 
                                                                <p>- 프론트엔드 R + typescript 개발</p>
                    <h5><i class="fas fa-edit"></i> 개인적으로 공부하고 있는 프로그래밍 언어들</h5>
                        <p>- Spring Boot (인프런 코딩강의)</p>
                        <p>- JavaScript 객체지향 & ES6 신문법</p>
                        <p>- React + typescript + Redux 활용</p>
                        <p>- 정보처리기사 실기 시험준비 중</p>
                    </div>
           
            </div>
            
          </div>
  )
}

function BeforeCareer(){
  return (
    
    <div className='BeforeCareer'>
    <div className='ProjectTitle'><i class="fas fa-leaf"></i>Before Career</div>
      <hr className='ProHr'/><br/><br/>
    <div className='ExperienceContent'>
            <div className='BeforeCareerContent1'>
             
            
    <h5><i class="fas fa-briefcase fa-2x"></i> 이전 경력</h5> 
      <h5>
      ㈜ 소프트엔 - 개발본부 
      </h5>
      <p>- 근무기간 : 2020년 11월~2021년 11월</p>
      <p>- 프로젝트 개발, UI상세설계서 작업, 일본어번역 등</p>

      <h5>인피니트 - 영업부</h5>

      <p>- 근무기간 : 2018년 05월~2019년 10월</p>
      <p>- 업무내용 : 일본회사와 거래 및 견적상담, 번역, 수주 및 발주관리</p>

       </div>

      <div className='BeforeCareerContent2'>
            
    <h5><i class="fas fa-plane fa-2x"></i> 이전 활동</h5> 
    <h5>일본 유학 교환학생 & 워킹홀리데이 (약 2년)</h5>

      <p>- 한국어 강사(나고야), 리조또 파견사원(오사카 및 아와지시마)</p>
      <p>- 국제 문화교류센터 통역 및 중,고등학교 한국 소개활동 등<br/>
      (시코쿠 마쯔야마)</p>

    <h5><i class="fas fa-user-graduate fa-2x"></i> 평택대학교 광고홍보학과 졸업</h5>

      <p>- 재학기간 : 2013년 3월 ~ 2018년 8월</p>
</div>
</div>
</div>
  )
}
export default App;