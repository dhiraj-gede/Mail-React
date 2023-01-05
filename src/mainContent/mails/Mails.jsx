import React from "react";
import "./mails.css";
import {CgFlagAlt} from 'react-icons/cg'
import {MdDelete} from 'react-icons/md'
const Mails = ({
  activeFolder,
  folderName,
  handleFlagged,
  handleActiveMail,
  handleDelete,
}) => {
  return (
    <div className="mail__section">
      <h2>{folderName}</h2>
      <ul className="mails">
        {activeFolder.map((item, key) => (
          <li
            key={key}
            id={item.mId}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <a href="#" onClick={() => handleActiveMail(item)}>
              {item.subject}
            </a>

            {!item.folder.includes("deleted items") ? (
              <div className="btn">
                <button onClick={() => handleDelete(item.mId)}><MdDelete/></button>{" "}
                <button onClick={() => handleFlagged(item.mId)}><CgFlagAlt/></button>
              </div>
            ) : (
              <div className="btn">
                <button onClick={() => handleDelete(item.mId)} disabled>
                  deleted
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mails;
