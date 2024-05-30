import axios from "axios";
import { useEffect, useState } from "react";
import Uploader from "../../components/Uploader";
import { useRecoilState } from "recoil";
import { $ServerUrl } from "../../store";

export default function TestPage() {
  const [responseImgs, setResponseImgs] = useState([]);
  const [serverUrl] = useRecoilState($ServerUrl);
  function imgRequire(url) {
    return new URL(url, import.meta.url).href;
  }

  // Auth 
  function userLogin(userEmail, userPassword) {
    let server = `${serverUrl}/index.php/api/auth/login`;
    axios
      .post(server, {
        user_email: userEmail,
        user_password: userPassword,
      })
      .then((res) => {
        let Res = res.data;
        console.log(Res);
        // Save Token into localStorage of sessionStorage
        if (Res.error == false) {
          let Token = Res.data["user_token"];
          sessionStorage.setItem("user_token", Token);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Users Module

  function addNewUser(userEmail, userPassword, userRole = 2) {
    let server = `${serverUrl}/index.php/api/users/store`;
    axios
      .post(server, {
        user_email: userEmail,
        user_password: userPassword,
        user_role_id: userRole,
      })
      .then((res) => {
        let Res = res.data;
        console.log(Res);
        // Save Token into localStorage of sessionStorage
        if (Res.error == false) {
          let Token = Res.data["user_token"];
          sessionStorage.setItem("user_token", Token);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getAllUsers() {
    let server = `${serverUrl}/index.php/api/users`;
    let Token = sessionStorage.getItem("user_token");
    axios
      .get(server, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Countries Module

  function addNewCountry(
    countryName,
  ) {
    let Token = sessionStorage.getItem("user_token");
    let server = `${serverUrl}/index.php/api/countries/store`;
    axios
      .post(
        server,
        {
          country_name: countryName,
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        let Res = res.data;
        console.log(Res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getAllCounties() {
    let Token = sessionStorage.getItem("user_token");
    let server = `${serverUrl}/index.php/api/countries`;
    axios
      .get(
        server,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        let Res = res.data;
        console.log(Res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Locations Module

  function addNewLocation(
    locationName,
    locationCountryId,
  ) {
    let Token = sessionStorage.getItem("user_token");
    let server = `${serverUrl}/index.php/api/locations/store`;
    axios
      .post(
        server,
        {
          location_name: locationName,
          location_country_id: locationCountryId,
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        let Res = res.data;
        console.log(Res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getAllLocations() {
    let Token = sessionStorage.getItem("user_token");
    let server = `${serverUrl}/index.php/api/locations`;
    axios
      .get(
        server,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        let Res = res.data;
        console.log(Res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Locations Module

  function addNewProject(
    projectName,
    projectLocationID,
  ) {
    let Token = sessionStorage.getItem("user_token");
    let server = `${serverUrl}/index.php/api/projects/store`;
    axios
      .post(
        server,
        {
          project_name: projectName,
          project_location_id: projectLocationID,
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        let Res = res.data;
        console.log(Res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getAllProjects() {
    let Token = sessionStorage.getItem("user_token");
    let server = `${serverUrl}/index.php/api/projects`;
    axios
      .get(
        server,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        let Res = res.data;
        console.log(Res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Units Module

  function addNewUnit(
    unitName,
    unitProjectID,
    unit_medai_url = "none",
    unit_cover_name = "none",
    unit_details = "none",
    unit_imgs = "none",
  ) {
    let Token = sessionStorage.getItem("user_token");
    let server = `${serverUrl}/index.php/api/units/store`;
    axios
      .post(
        server,
        {
          unit_name: unitName,
          unit_project_id: unitProjectID,
          unit_medai_url: unit_medai_url,
          unit_cover_name: unit_cover_name,
          unit_details: unit_details,
          unit_imgs: unit_imgs,
        },
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        let Res = res.data;
        console.log(Res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getAllUnits() {
    let Token = sessionStorage.getItem("user_token");
    let server = `${serverUrl}/index.php/api/units`;
    axios
      .get(
        server,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      )
      .then((res) => {
        let Res = res.data;
        console.log(Res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function makeMediaUrl(moduleName) {
    let Token = sessionStorage.getItem("user_token");
    let server = `${serverUrl}/index.php/media/mkdir`;
    axios.post(server, {
      module_name: moduleName,
    }, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    }).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  function showAllProjects() {
    // let Token = sessionStorage.getItem("user_token");
    let server = `${serverUrl}/index.php/api/projects/all`;
    axios.get(server).then((res) => {

      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  function showMedia(dir) {
    let server = `${serverUrl}/index.php/media/related`;
    axios.post(server, {
      dir: dir,
    }).then((res) => {
      if (res.data.error == false) {
        setResponseImgs(res.data.data);
      }
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  function updateData(table_name, data, condition) {
    // 660b18c3d8ccc_pexels-wewe-yang-4532825.jpg
    let Token = sessionStorage.getItem("user_token");
    let server = `${serverUrl}/index.php/api/update`;
    // let data = {
    //   "unit_cover_name": "660b18c3d8ccc_pexels-wewe-yang-4532825.jpg",
    // };
    axios.post(server, {
      table_name: table_name,
      dataObj: data,
      condition: condition,
    }, {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    }).then((res) => {
      // if (res.data.error == false) {
      //   // setResponseImgs(res.data.data);
      // }
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  function showProjectDetials(project_id) {
    // let Token = sessionStorage.getItem("user_token");
    let server = `${serverUrl}/index.php/api/projects/${project_id}`;
    axios.get(server).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }
  useEffect(() => {
    // userLogin("a_fattah_m@icloud.com", "Admin@123");
    // addNewUser("a_fattah_m@icloud.com", "Admin@123", 1);
    // getAllUsers();
    // addNewCountry("Saudi Arabia");
    // getAllCounties();
    // addNewLocation("jeddah", 1);
    // getAllLocations();
    // addNewProject("Dream 2000", 1);
    // getAllProjects();
    // addNewUnit("unit 510", 2);
    // getAllUnits();
    // makeMediaUrl("units");
    // showAllProjects();
    // showMedia("units/1");
    // let data = {
    //   project_cover_name: `660dc3f275ed0_new_life_1.jpg`,
    //   project_name: `الصفا`,
    //   project_slogan: `تمام السلوجان ده`,
    //   project_details: `مشروع جامد جداً بكل تفاصيله`
    // };
    // units
    // projects
    // locations
    // countries
    // updateData("app_projects", data, "project_id = 2");
    // showProjectDetials(1);
  }, []);
  return (
    <div className="col-12">
      <h1 className="col-12 alert alert-danger">This is api test</h1>
      <Uploader />
      <div>
        {
          responseImgs.map((imgDir, index) => {
            return <img key={index} width="200" src={imgRequire(`${serverUrl}/${imgDir.split('./')[1]}`)} />
          })
        }
      </div>

    </div>
  );
}