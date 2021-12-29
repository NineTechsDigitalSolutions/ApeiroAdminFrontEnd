import CountStatistics from "../../Components/Statistics/CountStatistics";
import Layout from "./../../Layout/LayoutMain";
import { Row, Col, Typography } from "antd";
import { FaUserTie, FaBookReader, FaCashRegister } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import LineChart from "../../Components/Charts/LineChart";
import ColumnChart from "./../../Components/Charts/ColumnChart";
import DataTable from "../../Components/Table/DataTable";
import data from "../../tableData.json";

const Home = () => {
  const { Title } = Typography;
  return (
    <Layout active="home">
      <div className="home-main">
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} lg={6}>
            <div className="stats stat-4">
              <div>
                <span>E Books</span>
                <span>23423</span>
              </div>
              <div>
                <span>Audio Books</span>
                <span>23423</span>
              </div>
              <div>
                <span>E Magazines</span>
                <span>23423</span>
              </div>
              <div>
                <span>E News Papers</span>
                <span>23423</span>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={6}>
            <div className="stats stat-1">
              <CountStatistics
                title="Authors"
                value={704}
                prefix={<FaUserTie />}
              />
            </div>
          </Col>
          <Col xs={24} lg={6}>
            <div className="stats stat-2">
              <CountStatistics
                title="Readers"
                value={704}
                prefix={<FaBookReader />}
              />
            </div>
          </Col>
          <Col xs={24} lg={6}>
            <div className="stats stat-3">
              <CountStatistics
                title="Net Income"
                value={704}
                prefix={<FaCashRegister />}
              />
            </div>
          </Col>
        </Row>
        <div className="mt-30">
          <Row gutter={[16, 30]}>
            <Col xs={24} lg={12}>
              <div className="white-card">
                <Title level={5}>Sales Value</Title>
                <LineChart />
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="white-card">
                <Title level={5}>New Users</Title>

                <ColumnChart />
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="white-card">
                <Title level={5}>Latest Books</Title>

                <DataTable
                  data={data.data1}
                  columns={data.columns1}
                  width={400}
                />
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className="white-card">
                <Title level={5}>Last Transactions</Title>
                <DataTable
                  data={data.data2}
                  columns={data.columns2}
                  width={450}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
