import React, { useEffect, useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../../Shared/Loading/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [myData, setMyData] = useState([]);
  const [token] = useToken(user);
  const { navigate } = useNavigate();

  useEffect(() => {
    fetch(
      `https://handyman-server-production.up.railway.app/user/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
      });
  }, [user.email]);

  const [updateProfile, updating] = useUpdateProfile(auth);

  if (token) {
    navigate("/");
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "e8c027f236e8c7eaf004d70e5cee2cfd";
  if (updating) {
    return <Loading />;
  }

  const onSubmit = async (data) => {
    const image = data.image[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const theUser = {
            user_name: data.name || user?.displayName,
            location: data.location || myData.location || "N/A",
            education: data.education || myData?.education || "N/A",
            phone: data.phone || myData?.phone || "N/A",
            photo: img || user?.photoURL,
          };
          const onSubmit = async (data) => {
            await updateProfile({
              displayName: theUser.user_name,
              photoURL: result.data.url,
            });
          };
          onSubmit();
          toast.success("Updated user successfully");
          reset();
          // send to your database
          fetch(
            `https://handyman-server-production.up.railway.app/user/${user?.email}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(theUser),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
              }
            });
        }
      });
  };
  return (
    <div>
      <>
        <div>
          <div className="justify-center flex object-center items-center lg:grid-cols-2 grid-cols-1 gap-3">
            <div className="grid lg:grid-cols-2">
              <div className="md:items-center md:justify-center md:flex">
                <div className="mt-8">
                  <img
                    className="mb-3 h-40 w-40 items-center justify-center flex"
                    src={user?.photoURL}
                    alt={user?.displayName}
                  ></img>
                  <h1 className="mb-3 text-md">Name: {user.displayName}</h1>
                  <h1 className="mb-3 text-md">Email: {user.email}</h1>
                  {myData.phone ? (
                    <p className="mb-3 text-md">Phone: {myData.phone}</p>
                  ) : (
                    <p className="mb-3 text-md">Phone: N/A</p>
                  )}
                  {myData.location ? (
                    <p className="mb-3 text-md">Location: {myData.location}</p>
                  ) : (
                    <p className="mb-3 text-md">Location: N/A</p>
                  )}
                  {myData.education ? (
                    <p className="mb-3 text-md">
                      Education: {myData.education}
                    </p>
                  ) : (
                    <p className="mb-3 text-md">Education: N/A</p>
                  )}
                </div>
              </div>

              <div className="items-center justify-center">
                <form
                  className="mt-8 space-y-6"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="rounded-md -space-y-px">
                    <div className="mb-2">
                      <label htmlFor="name" className="sr-only">
                        Name
                      </label>
                      <input
                        style={{ width: "300px" }}
                        name="name"
                        type="name"
                        {...register("name")}
                        className="appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="sr-only">
                        Phone
                      </label>
                      <input
                        style={{ width: "300px" }}
                        name="phone"
                        type="text"
                        {...register("phone")}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2"
                        placeholder="Phone"
                      />
                    </div>
                    <div>
                      <label htmlFor="education" className="sr-only">
                        Education
                      </label>
                      <input
                        style={{ width: "300px" }}
                        name="education"
                        type="text"
                        {...register("education")}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2"
                        placeholder="Education"
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="sr-only">
                        Location
                      </label>
                      <input
                        style={{ width: "300px" }}
                        name="location"
                        type="text"
                        {...register("location")}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2"
                        placeholder="Location"
                      />
                    </div>

                    <div>
                      <label htmlFor="short_description" className="sr-only">
                        Photo
                      </label>
                      <input
                        style={{ width: "300px" }}
                        name="image"
                        type="file"
                        {...register("image", { required: true })}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2"
                        placeholder="Photo"
                      />
                      <p className="text-red-500 mb-1">
                        {errors.image && "*An image is required"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      style={{ width: "300px" }}
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Update Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MyProfile;
