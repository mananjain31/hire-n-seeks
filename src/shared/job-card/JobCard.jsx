import {
  ArrowForwardIos,
  CalendarToday,
  Category,
  CoPresent,
  Error,
  LocationOn,
  WorkOutline,
} from "@mui/icons-material";
import { Chip } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { applyJob, deleteJob } from "../../store/actions/jobs-actions";
import getDateString from "../../utils/getDateString";

export const JobCard = ({ job }) => {
  const {
    id,
    jobDate, //
    title, //
    jobPos,
    desc,
    timing,
    reqSkill,
    expLevel,
    postedBy,
    location,
    appliedPeople,
  } = job;

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // when job not found
  if (!job.title)
    return (
      <div className="ml-auto mr-auto">
        <h1 className="text-2xl text-red-400 font-bold flex items-center gap-2">
          <Error />
          Invalid Job ID
        </h1>
      </div>
    );

  const handleApplyClick = (ev) => {
    dispatch(applyJob(id));
  };

  const confirmDelete = (ev) => {
    const userConfirmed = window.confirm("Are you sure you want to Delete?");

    if (userConfirmed) {
      dispatch(deleteJob(id));
    }
  }

  const alreadyApplied = appliedPeople && appliedPeople.includes("" + user.id);
  const applyBtnLabel = !alreadyApplied ? "Apply Now" : "Applied";

  let jobPostedDate = getDateString(new Date(jobDate));
  const trimmedDesc = desc.length > 200 ? desc.substring(0, 200) + "..." : desc;

  return (
    <div className="bg-purple-rgba px-12 py-6 flex">
      <div className="flex flex-col gap-4 flex-1">
        <h2 className="text-xl font-bold text-left">{title}</h2>
        <div className="flex flex-col items-start gap-2">
          <span className="flex gap-1 items-center">
            <CalendarToday /> <span>Posted on {jobPostedDate}</span>
          </span>
          <span className="flex gap-1 items-center">
            <ArrowForwardIos /> <span>Posted By : {postedBy}</span>
          </span>
          <span className="flex gap-1 items-center">
            <WorkOutline />
            <span>{jobPos}</span>
          </span>
          <span className="lg:hidden flex gap-1 items-center">
            <Category />
            <span className="flex gap-1 flex-wrap">
              {reqSkill?.map((skill) => (
                <Chip className="text-white" key={skill + id} label={skill} />
              ))}
            </span>
          </span>
          <span className="flex gap-1 items-center">
            <LocationOn /> <span>{location}</span>
          </span>
          <span className="flex gap-1 items-center">
            <CoPresent /> <span>{expLevel} Years experience </span>
          </span>
          {/* <span> <AccessTime/> {timing}</span>  */}
        </div>
        <div className="flex gap-2">
          {!user.is_recruiter && (
            <button
              disabled={alreadyApplied}
              onClick={handleApplyClick}
              className={`rounded 
                    ${
                      alreadyApplied ? "bg-slate-800" : "bg-primary"
                    } text-white px-3 py-2 
                    ${
                      alreadyApplied
                        ? "hover:bg-slate-500"
                        : "hover:bg-primary-light"
                    }
                    transition-all`}
            >
              {applyBtnLabel}
            </button>
          )}

          {user.is_recruiter && postedBy === user.userName && (
            <Link
              to={"/viewapplications/" + id}
              className={`rounded 
                    ${
                      alreadyApplied ? "bg-slate-800" : "bg-primary"
                    } text-white px-3 py-2 
                    ${
                      alreadyApplied
                        ? "hover:bg-slate-500"
                        : "hover:bg-primary-light"
                    }
                    transition-all`}
            >
              View Applications
            </Link>
          )}

          {user.is_recruiter && postedBy === user.userName && (
            <Link
              to={"/jobs"}
              className={`rounded 
                    ${
                      alreadyApplied ? "bg-slate-800" : "bg-red-600"
                    } text-white px-3 py-2 
                    ${alreadyApplied ? "hover:bg-red-400" : "hover:bg-red-400"}
                    transition-all`}
              onClick={confirmDelete}
            >
              Delete
            </Link>
          )}

          <button
            className="rounded text-primary outline px-3 py-2 hover:bg-white transition-all"
            onClick={() => navigate("/job/" + id)}
          >
            More Info
          </button>
        </div>
      </div>

      <div className="flex-1 lg:flex hidden flex-col gap-3">
        <h2 className="text-lg text-primary text-left"> Description </h2>
        <p className="text-left text-gray-700">{trimmedDesc}</p>
        <span className="flex gap-1 items-center">
          {" "}
          <Category />
          <span className="flex gap-1 flex-wrap">
            {reqSkill?.map((skill) => (
              <Chip className="text-white" key={skill + id} label={skill} />
            ))}
          </span>
        </span>
      </div>
    </div>
  );
};
