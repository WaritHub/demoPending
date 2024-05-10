// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from "react";
import { initializeIcons } from "@fluentui/react";
import { Input } from "@fluentui/react-components";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
// import { createTheme } from "@fluentui/react";
import { Dropdown, Option } from "@fluentui/react-components";
import { DatePicker } from "@fluentui/react-datepicker-compat";
// import { makeStyles } from "@fluentui/react-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
// @fortawesome/fontawesome-free, @fortawesome/free-solid-svg-icons, and @fortawesome/free-regular-svg-icons
import ResponsivePagination from "react-responsive-pagination";
import {makeStyles} from "@fluentui/react-components";
initializeIcons();

const useStyles = makeStyles({
  root: {
    margin: "10px",
    display: "inline-block", 
   "@media (max-width: 800px)": {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px"
  }
  },
  status: {
    display: "flex",
    marginTop: "-25px",
    alignItems: "center",
    justifyContent: "flex-end",
   "@media (max-width: 600px)": {
    display: "block",
    flexDirection: "column",
    marginTop: "25px",
  }
  },
  orderProcess: {
    fontSize: "70%",
  },
  statusText: {
    display: "inline-block", 
    "@media (max-width: 600px)": {
      marginRight: "5px"
    }
  }
});
function App() {
  const [currentPage, setCurrentPage] = useState(4);
  const totalPages = 5;
  const styles = useStyles();

  return (
    <FluentProvider theme={webLightTheme}>
      <div className="flex-container">
        <div className="text">รอการอนุมัติ</div>
        <div className="box">
          <div className="clear-search">
            ล้างการค้นหา
          </div>
          <div className={styles.root}>
            <Input placeholder="ค้นหารายการ"/>
            </div>
          <div className={styles.root}>
          <Dropdown placeholder="ประเภทของเอกสาร" appearance="outline">
            <Option>แบบขออนุมัติภายนอก</Option>
            <Option>แบบขออนุมัติภายใน</Option>
            <Option>แบบขออนุมัติการซื้อ</Option>
            <Option>เอกสารอัปโหลด</Option>
            <Option>สัญญา</Option>
          </Dropdown>
          </div>
          <div className={styles.root}>
            <DatePicker allowTextInput placeholder="ช่วงเวลา"/>
          </div>
        </div>
      </div>

      <div className="flex-container">
        <div className="text1" style={{ marginTop: 50 }}>
          รายการอนุมัติ
        </div>
        <div className={styles.status}>
          <Dropdown placeholder="เลือกสถานะ" appearance="outline">
            <Option>ทั้งหมด</Option>
            <Option>อนุมัติ</Option>
            <Option>รอดำเนินการ</Option>
            <Option>รอการแก้ไข</Option>
            <Option>ไม่อนุมัติ</Option>
          </Dropdown>
        </div>

        {/* table */}
        <table>
          <thead>
            <tr>
              <th scope="col">รายการบันทึก</th>
              <th scope="col">สร้างโดย</th>
              <th scope="col">สถานะ</th>
              <th scope="col">ช่วงเวลา</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div style={{ fontWeight: "bold", paddingBottom: 10 }}>
                  ทดสอบขออนุมัติการซื้อ 1
                </div>
                <div style={{ fontSize: "90%" }}>DEFAULT-PR-202404-0001</div>
              </td>
              <td>
                <div style={{ fontWeight: "bold", paddingBottom: 10 }}>
                  Lorem Ipsum
                </div>
                <div style={{ fontSize: "90%" }}>แผนก : ไอที</div>
              </td>
              <td>
                <div className="statusPending">
                  <FontAwesomeIcon icon={faClock} className="iconPending" />
                  <div className={styles.statusText}>รอดำเนินการ</div>
                  <div style={{ fontSize: "70%" }}>ลำดับอนุมัติ 1/2</div>
                </div>
              </td>
              <td data-label="ช่วงเวลา" style={{ fontWeight: "bold" }}>
                12/04/2024
              </td>
            </tr>
            {/* 2 */}
            <tr>
              <td>
                <div style={{ fontWeight: "bold", paddingBottom: 10 }}>
                  ทดสอบขออนุมัติการซื้อ 1
                </div>
                <div style={{ fontSize: "90%" }}>DEFAULT-PR-202404-0001</div>
              </td>
              <td>
                <div style={{ fontWeight: "bold", paddingBottom: 10 }}>
                  Lorem Ipsum
                </div>
                <div style={{ fontSize: "90%" }}>แผนก : ไอที</div>
              </td>
              <td>
                <div className="statusPending">
                  <FontAwesomeIcon icon={faClock} className="iconPending" />
                  <div className={styles.statusText}>รอดำเนินการ</div>
                  <div style={{ fontSize: "70%" }}>ลำดับอนุมัติ 1/2</div>
                </div>
              </td>
              <td data-label="ช่วงเวลา" style={{ fontWeight: "bold" }}>
                12/04/2024
              </td>
            </tr>
            {/* 3 */}
            <tr>
              <td>
                <div style={{ fontWeight: "bold", paddingBottom: 10 }}>
                  ทดสอบขออนุมัติการซื้อ 1
                </div>
                <div style={{ fontSize: "90%" }}>DEFAULT-PR-202404-0001</div>
              </td>
              <td>
                <div style={{ fontWeight: "bold", paddingBottom: 10 }}>
                  Lorem Ipsum
                </div>
                <div style={{ fontSize: "90%" }}>แผนก : ไอที</div>
              </td>
              <td>
                <div className="statusPending">
                  <FontAwesomeIcon icon={faClock} className="iconPending" />
                  <div className={styles.statusText}>รอดำเนินการ</div>
                  <div style={{ fontSize: "70%" }}>ลำดับอนุมัติ 1/2</div>
                </div>
              </td>
              <td data-label="ช่วงเวลา" style={{ fontWeight: "bold" }}>
                12/04/2024
              </td>
            </tr>
          </tbody>



        </table>
        <ResponsivePagination
            current={currentPage}
            total={totalPages}
            onPageChange={setCurrentPage}
          />
      </div>
    </FluentProvider>
  );
}

export default App;
