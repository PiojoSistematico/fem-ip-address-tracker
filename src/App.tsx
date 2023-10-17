import { useState } from "react";
import iconArrow from "./assets/images/icon-arrow.svg";

type DataProp = {
  ip: string;
  location: {
    country: string;
    region: string;
    timezone: string;
  };
  domains: string[];
  as: {
    asn: string;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
};

function App() {
  const [data, setData] = useState<DataProp>({
    ip: "8.8.8.8",
    location: {
      country: "US",
      region: "California",
      timezone: "-07:00",
    },
    domains: [
      "0d2.net",
      "003725.com",
      "0f6.b0094c.cn",
      "007515.com",
      "0guhi.jocose.cn",
    ],
    as: {
      asn: "15169",
      name: "Google LLC",
      route: "8.8.8.0/24",
      domain: "https://about.google/intl/en/",
      type: "Content",
    },
    isp: "Google LLC",
  });

  return (
    <>
      <main className="font-rubik text-very-dark-gray text-lg h-screen flex flex-col">
        <section
          title="data"
          className="bg-pattern-mobile bg-center bg-cover bg-no-repeat h-2/5"
        >
          <h1 className="text-white  font-bold text-2xl text-center p-8">
            IP Address Tracker
          </h1>
          <form>
            <input type="text" />{" "}
            <button>
              <img src={iconArrow} alt="icon-arrow" />
            </button>
          </form>
          <section
            title="result"
            className="flex flex-col items-center bg-white w-4/5 rounded-xl p-6 gap-6"
          >
            <div className="flex flex-col gap-1">
              <span className="text-dark-grey text-xs uppercase  font-bold">
                IP Address
              </span>
              <span className="text-very-dark-grey font-bold">Result</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-dark-grey text-xs uppercase  font-bold">
                Location
              </span>
              <span className="text-very-dark-grey font-bold">Result</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-dark-grey text-xs uppercase  font-bold">
                Timezone
              </span>
              <span className="text-very-dark-grey font-bold">Result</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-dark-grey text-xs uppercase  font-bold">
                ISP
              </span>
              <span className="text-very-dark-grey font-bold">Result</span>
            </div>
          </section>
        </section>

        <picture className="bg-green-400 h-3/5">
          <span>Hello</span>
        </picture>
      </main>
    </>
  );
}

export default App;
