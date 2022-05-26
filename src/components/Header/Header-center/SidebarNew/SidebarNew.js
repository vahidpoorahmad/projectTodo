import React from "react";
import "./SidebarNew.css";
function SidebarNew({ onclick }) {
  return (
    <div className="side-new">
      <div className="side-new__control">
        <div className="side-new__neutral">
          <h2 className="side-new__neutral--title">Help</h2>
          <button className="side-new__neutral--icon" onClick={onclick}>
            <i className="fas fa-user"></i>
          </button>
        </div>
        <div className="card">
          <div className="card__imagetitle">
            <img src={`/imageSideNew/1.jpg`} alt="Error" width="100%" />
          </div>
          <div className="card__textbody">
            <div className="card__textbody--control-left">
              <button className="card__btn">
                <i className="fas fa-user"></i>
              </button>
            </div>
            <div className="card__textbody--control-right">
              <h4 className="card__title">Focus on what matters</h4>
              <p className="card__body">
                Suggestions help you keep track of your urgent and important
                tasks.
              </p>
              <a href="https://www.google.com" className="card__footer">
                Try it
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__imagetitle">
            <img src={`/imageSideNew/3.jpg`} alt="Error" width="100%" />
          </div>
          <div className="card__textbody">
            <div className="card__textbody--control-left">
              <button className="card__btn">
                <i className="fas fa-user"></i>
              </button>
            </div>
            <div className="card__textbody--control-right">
              <h4 className="card__title">
                Manage your Samsung Reminder with To Do
              </h4>
              <p className="card__body">
                Sync Samsung Reminder with To Do to manage your reminders from
                missed calls, messages, Bixby, and more.
              </p>
              <a
                href="https://techcommunity.microsoft.com/t5/microsoft-to-do-blog/remember-it-all-with-microsoft-to-do-and-samsung-reminder/ba-p/1925893"
                className="card__footer"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__imagetitle">
            <img src={`/imageSideNew/4.jpg`} alt="Error" width="100%" />
          </div>
          <div className="card__textbody">
            <div className="card__textbody--control-left">
              <button className="card__btn">
                <i className="fas fa-user"></i>
              </button>
            </div>
            <div className="card__textbody--control-right">
              <h4 className="card__title">Categorize your tasks in To Do</h4>
              <p className="card__body">
                Assign categories to organize your tasks. Head to a task’s
                detail view to try it out.
              </p>
              <a
                href="https://techcommunity.microsoft.com/t5/microsoft-to-do-blog/remember-it-all-with-microsoft-to-do-and-samsung-reminder/ba-p/1925893"
                className="card__footer"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarNew;
