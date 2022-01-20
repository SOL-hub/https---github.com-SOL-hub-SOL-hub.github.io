import './App.css';
import {Navbar,Container } from 'react-bootstrap';
import parksol from './parksol.jpg';
import back1 from './BackEnd/back1.png';
import back2 from './BackEnd/back2.png';
import back3 from './BackEnd/back3.png';
import back4 from './BackEnd/back4.png';
import back5 from './BackEnd/back5.png';
import back6 from './BackEnd/back6.png';

import front1 from './FrontEnd/front1.png';
import front2 from './FrontEnd/front2.png';
import front3 from './FrontEnd/front3.png';
import front4 from './FrontEnd/front4.png';
import front5 from './FrontEnd/front5.png';
import front6 from './FrontEnd/front6.png';
import front7 from './FrontEnd/front7.png';
import front8 from './FrontEnd/front8.png';
import svn from './Version/svn.png';

import Erdcloud from './Communication/Erdcloud.png';

import notion from './notion.png';
import naverBlog from './naverBlog.png';
import salLong from './salLong.png';
import notionlogo from './notionlogo.png';
import naverlogo from './naverlogo.png';

import 보드살롱 from './project-image/보드살롱.png';
import houudoin from './project-image/houudoin.png';
import Protfolio from './project-image/Protfolio.png';
import DGIS from './project-image/DGIS.jpg';

import lawyer3 from './project-image/lawyer3.png';
import Oherp from './project-image/Oherp.png';


function App() {
  return (
    <div className="App">
  <div className='NavBackGround'>
     <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand className='Protfolio'>SOL's Protfolio</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <ul className='NarBar'>
        <li><a href="#action1">About Sol</a></li>
        <li><a href="#action1">Skills</a></li>
        <li><a href="#action1">Projects</a></li>
        <li><a href="#action1">Archiving</a></li>
        <li><a href="#action1">Programming Experience</a></li>
        <li><a href="#action1">Before Career</a></li>
      </ul>
  </Container>

</Navbar>

</div>

<div className='ProTitle'>
  <h3>박 솔</h3>
  <p>웹 개발자 SOL's 포토폴리오</p>
  <hr className='ProHr'/>
  <p className='HrContent'>안녕하십니까<br/>프론트단공부가 취미인 백엔드 개발자입니다.<br/> 엎치락뒤치락해도 목표까지 묵묵히 도전하는 습관이 저의 강점입니다.</p>
  <button className='ProBtn'>자세히 알아보기 <br/><span></span></button>

</div>
<div className='AboutSol'>
  <div className='AboutTitle'>About SOL</div>
   <hr className='ProHr'/>
    <div className='row'>

        <div className='col-md-4'>
              <div className='parksol'>
                  <img src={parksol} width='350' height='340' alt='parksol'/>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='box'>
           <i class="fas fa-user-check fa-2x" ></i> NAME<br/> 박 솔
          </div>
        </div>
        
        <div className='col-md-4'>
        <div className='box'>
          <i class="fas fa-subway fa-2x"></i> ADDRESS <br/>서울시 동작구<br/>
            <p>(근처 지하철)</p>
            <div className='subway'>
            <div className='subway1'>상도역</div>
            <div className='subway2'>노량진역</div>
            <div className='subway3'>봉천역</div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
        <div className='box'>
          <i class="fas fa-birthday-cake fa-2x"></i> BIRTH <br/>94.03.17</div>
        </div>
        
        <br/><br/>
        <div className='col-md-4'>
          <div className='box'>
            <i class="fas fa-mobile-alt fa-2x"></i> TEL <br/>010-5267-2407
            </div>
          </div>
        <div className='col-md-4'>
        <div className='box'>
        <i class="fas fa-envelope fa-2x"></i> E-MAIL <br/> thfdl0317@naver.com</div>
        </div>
    </div>
</div>


<div className='Skills'>
  <div className='AboutTitle'>Skills</div>
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


<div className='Project'>
  <div className='ProjectTitle'>Projects</div>
    <hr className='ProHr'/><br/><br/>
  <div className='ProjectContent'>
    <div className='proMiniTitle'>
      <h3>보드살롱 보드게임중고거래 사이트</h3>
        <p>2022년03월(사이드 프로젝트 7인)</p>
    </div>
    <div className='ProImg'>
        <img src={보드살롱} width='630' height='310' alt='보드살롱'/>

    </div>

    
    <div className='ProContent'>
        <div className='siteContent'>
        보드게임 '특화' 중고거래 플랫폼, <br/>
국내 중고 물품 거래할 때 다양한 보드게임 구성품들에 대한 확인단계를 보다 간편 만드는  
전문적인 보드게임 중고 사이트로 
구매자는 확인할 수 있는 정보를 최대한 수집하여, 중고 보드게임을 검색/필터/구매문의를 간편하게 .
판매자는 최대한의 정보를 입력하여 중고 보드게임을 판매할 수 있도록 하는 것을 목표로한
구매자와 판매자의 원활한 소통의 장으로만드는 MVP서비스 플랫폼
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
      <h3>Protfolio 웹사이트</h3>
        <p>2022년01월 1인 개인프로젝트</p>
    </div>
    <div className='ProImg'>
        <img src={Protfolio} width='630' height='315' alt='Protfolio'/>
        

    </div>
    
    <div className='ProContent'>
        <div className='siteContent'>
        지금 보시는 웹사이트가 해당 사이트이며 <br/>
        React에 배웠던 것을 활용하며 
        직접 레이아웃을 작업, TypeScript와 Sass를 사용하면서 프론트엔드 개발을 더 깊숙히
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
        <img src={DGIS} width='630' height='315' alt='DGIS'/>

        
    </div>

    <div className='ProContent'>
        <div className='siteContent'>
        
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
      <h3>사기꾼 잡는 변호사</h3>
        <p>2021년 06월 (주)소프트엔 - 프로젝트 </p>
    </div>
    <div className='ProImg'>
      <img src={lawyer3} width='602' height='305' alt='lawyer3'/>

    </div>
    
    <div className='ProContent'>
        <div className='siteContent'>
        상담을 보다 간편하게 진행 할 수 있는 변호상담 어플
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
      <h3>Oherp!</h3>
        <p>2020년08월 </p>
    </div>
    <div className='ProImg'>
        <img src={Oherp} width='602' height='315' alt='Oherp'/>
    </div>
    
    <div className='ProContent'>
        <div className='siteContent'>인사관리를 위한 통합 솔루션
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
        <p>2020년07월 </p>
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
            <div className='ArcTitle'>Archiving</div>
              <hr className='ProHr'/><br/><br/>
                <div className='ArcContent'>
                  <i class="fab fa-github-square fa-8x"></i>
                  <br/>
                    <a href='https://github.com/SOL-hub'>https://github.com/SOL-hub</a>
                    <hr/>  
                    <h5>소스 코드 저장공간</h5>
                  <ul>
                    <li>혼자서 배운 코딩들 정리용, 연습용 소스 코드</li>
                    <li>현재 진행 중인 개인 코드, <br/>사이드프로젝트 팀과 공유용 소스 코드</li>
                    <li>개발 교육 당시 배운 내용정리 및 소스 코드 </li>
                  </ul>
                  </div>
                

                <div className='ArcContent'>
                  <img src={notionlogo} width='252' height='128' alt='notionlogo'/>
                  <a href='https://www.notion.so/ko-kr'>https://www.notion.so/ko-kr</a>
                  <hr/>
                  <h5>프로그래밍 언어 공부 정리</h5>
                  <ul>
                    <li>잊지 않고 기억할 공부내용들 상세 정리</li>
                    <li>웹 개발을 시작하며 진행한 프로젝트, <br/>코드 기록</li>
                    <li>프로젝트 팀원과 함께 진행 과정 및 정보 공유</li>
                  </ul>
                </div>

                <div className='ArcContent'>
                   <img src={salLong} width='290' height='152'alt='salLong'/>
                   <a href='https://blog.naver.com/boardgetddo_team'>https://blog.naver.com/boardgetddo_team</a>
                   <hr/>
                    <h5>'보드살롱' 블로그</h5>
                  <ul>
                    <li>서비스 출시 전 관심 유저를 위한 홍보 활동</li>
                    <li>사이드프로젝트/IT관련 업계 사람 관심유도</li>
                    <li>IT관련 정보, 프로젝트의 진행 상황 공유</li>
                  </ul>
                </div>
                <div className='ArcContent'>
                <img src={naverlogo} width='280' height='128'alt='naverlogo'/>
                <a href='https://blog.naver.com/thfdl0317'> https://blog.naver.com/thfdl0317</a>
                <hr/>
                    <h5>지식공유, 공부정리 목적의 블로그</h5>
                      <ul>
                        <li>개발 중 겪은 오류, 당신만은..쉽게 풀어라. <br/>오류에 대한 해결방법 정리</li>
                        <li>프로젝트를 하며 배운 코드 기록 및 자료 정리</li>
                        <li>웹 개발을 시작하면서 배운 웹 관련 지식 공유</li>
                      </ul>
                </div>
          </div>


            <div className='Experience'>
            <div className='ProjectTitle'>Programming Experience</div>
              <hr className='ProHr'/><br/><br/>
            <div className='ExperienceContent'>
                    <div className='ExperienceContent1'>
                    <h5><i class="fas fa-edit"></i> 교육기관 : KH정보교육원(당산점)</h5>
                    <h5><i class="fas fa-edit"></i> 교육기간 : 20.04.16~20.09.23</h5>
                    <h5><i class="fas fa-edit"></i> 교육과목 : 디바이스&웹 콘텐츠 융합 디지털 컨버전스 양성과정(2)</h5>
                      <h5><i class="fas fa-edit"></i> 교육내용 </h5>
                        <p>- ORACLE SQL Programming, DB 기본부터 활용까지</p>
                        <p>- JAVA/ Servlet / JSP, jdbc/Spring Framework, Mybatis, Ajax</p>
                        <p>- HTML / CSS / JavaScript/JQuery</p>
                        <p>- 세미, 파이널팀 프로젝트 MVP패턴으로 진행</p>

                    </div>
                  
                    <div className='ExperienceContent2'></div>
           
            </div>
            
          </div>

          <div className='Project'>
            <div className='ProjectTitle'>Before Career</div>
              <hr className='ProHr'/><br/><br/>
            <div className='ProjectContent'></div>
            
          </div>

      <div className='Final'>
          <div className='FinalIcons'>

              <div className='Icons'>
                <h4><i class="fab fa-github fa-4x"></i></h4>
              </div>
              <div className='Icons'>
                <h4><img src={notion} width='96' height='96' alt='notion'/></h4>
              </div>
              <div className='Icons'>
                <h4><img src={naverBlog} width='96' height='96' alt='naverBlog'/></h4>
              </div>
              <div className='Icons'>
                <h4><i class="fab fa-facebook fa-4x"></i></h4>
              </div>

             
          </div>
          
          <div className='FinalIcons2'>
            <h5><i class="far fa-copyright"></i> 2022. SOL PARK. All rights reserved. </h5>
          </div>
          </div>
</div>
  );
}

export default App;
