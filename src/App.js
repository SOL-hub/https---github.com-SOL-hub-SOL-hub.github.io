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
          <i class="fas fa-birthday-cake fa-2x"></i> BIRTH 94.03.17</div>
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
      <h3>보드살롱보드게임중고 사이트</h3>
        <p>2022년03월(사이드 프로젝트 7인)</p>
    </div>
    <div className='ProImg'>
        <img src=''></img>
    </div>

    
    <div className='ProContent'>
        <div className='siteContent'>
        일반적인 가구 판매를 넘어 우리집의 인테리어 견적을 믿고 맡길 수 있는 토탈 인테리어 솔루션을 제공하는 사이트
        </div>

          <hr/>

        <div className='siteSkill'>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <div className='appeal'>

            </div>
        </div>
    </div>



  </div>
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
            <div className='ProjectContent'>
            <div className='proMiniTitle'>
                <h3>보드살롱보드게임중고 사이트</h3>
                  <p>2022년03월(사이드 프로젝트 7인)</p>
            </div>
                    <div className='ProImg'>
                        <img src=''></img>
                    </div>

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
