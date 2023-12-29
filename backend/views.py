import json
from typing import List
from django.http.response import HttpResponse, JsonResponse

# from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt  # import
from django.contrib.auth import authenticate, logout

# from django.contrib.auth.hashers import make_password, check_password
# from django.contrib.auth.models import User, auth
from .models import User, postedJob
from django.shortcuts import render

# from datetime import timezone
from django.utils import timezone

def index(request):
    return render(request, 'index.html')

@csrf_exempt
def signup(request):
    if request.method == "POST":

        signInData = json.loads(request.body)

        user_name = signInData["userName"]
        first_N = signInData["firstName"]
        last_N = signInData["lastName"]
        e_Mail = signInData["email"]
        # dofb = signInData["dob"]
        contact = signInData["contactNumber"]
        pass_word = signInData["password"]

        if User.objects.filter(userName=user_name).exists():
            # print("Username Taken")
            return JsonResponse({"success": False, "error": "User name Taken"})
        elif User.objects.filter(email=e_Mail).exists():
            # print("Email already Exist")
            return JsonResponse({"success": False, "error": "Email already Exist"})
        elif User.objects.filter(contactNumber=contact).exists():
            # print("Mobile already Exist")
            return JsonResponse({"success": False, "error": "Mobile already Exist"})

        else:
            user = User.objects.create_user(
                password=pass_word,
                userName=user_name,
                firstName=first_N,
                lastName=last_N,
                email=e_Mail,
                # dob=dofb,
                contactNumber=contact,
                is_active=1,
            )
            user.save()
            userInfo = {
                "User Name": user_name,
                "First Name": first_N,
                "Last Name": last_N,
                "E-Mail": e_Mail,
                # "Date of Birth": dofb,
                "Contact": contact,
                "success": True,
            }
            # print("Data Saved")
            return JsonResponse(userInfo)
    else:
        # print("Error")
        return JsonResponse({"success": False, "error": "Unknown error"})


def userData(user):

    userData = User.objects.get(userName=user)
    # return userData
    return {
        "id":userData.id,
        "userName": userData.userName,
        "firstName": userData.firstName,
        "lastName": userData.lastName,
        "email": userData.email,
        "dob": userData.dob,
        "contactNumber": userData.contactNumber,
        "address": userData.address,
        "city": userData.city,
        "state": userData.state,
        "country": userData.country,
        "bio": userData.bio,
        "skills": userData.skills,
        "projects": userData.projects,
        "linkGithub": userData.linkGithub,
        "linkLinkedIn": userData.linkLinkedIn,
        "linkExtra": userData.linkExtra,
        "is_recruiter": userData.is_recruiter,
    }


@csrf_exempt
def login(request):
    if request.method == "POST":
        loginData = json.loads(request.body)
        if "userName" in loginData.keys():

            user = authenticate(
                userName=loginData["userName"], password=loginData["password"]
            )

            if user is not None:
                request.session["user"] = loginData["userName"]
                return JsonResponse(
                    {"success": True, "userData": userData(request.session.get("user"))}
                )
            else:
                return JsonResponse(
                    {"success": False, "error": "Username or Password Wrong"}
                )

        elif "email" in loginData.keys():

            try:
                userInfoByEmail = User.objects.get(email=loginData["email"])
            except:
                return JsonResponse({"Error": "No User Found"})

            # print(userInfoByEmail.userName)
            user = authenticate(
                userName=userInfoByEmail.userName, password=loginData["password"]
            )

            if user is not None:
                request.session["user"] = userInfoByEmail.userName
                return JsonResponse(
                    {"success": True, "userData": userData(request.session.get("user"))}
                )
            else:
                return JsonResponse(
                    {"success": False, "error": "Email or Password Wrong"}
                )

        else:
            try:
                userInfoByCont = User.objects.get(
                    contactNumber=loginData["contactNumber"]
                )
            except:
                return JsonResponse({"Error": "Cont No User Found"})
            user = authenticate(
                userName=userInfoByCont.userName, password=loginData["password"]
            )
            if user is not None:
                request.session["user"] = userInfoByCont.userName
                return JsonResponse(
                    {"success": True, "userData": userData(request.session.get("user"))}
                )
            else:
                return JsonResponse(
                    {"success": False, "error": "Contact Number or Password Wrong"}
                )
    else:
        return JsonResponse({"success": False, "error": "No Request"})


@csrf_exempt
def user(request):
    return JsonResponse({"User": request.session.get("user")})


@csrf_exempt
def logouts(request):
    logout(request)
    return JsonResponse({"success": True, "User": "None: Logged Out"})


@csrf_exempt
def userProfile(request, userID):
    try:
        # print(userID)

        return JsonResponse(
            {
                "success": True,
                "data": userData(userID),
            }
        )
    except Exception as e:
        # print(e)
        return JsonResponse({"success": False, "error": "User not found"})


@csrf_exempt
def postJob(request):
    # {
    # "title" : "Data Scientist Required",
    # "jobPos" : "Data Scientist",
    # "desc" : "job Desc",
    # "timing" : "10 AM - 8 PM",
    # "reqSkill" : ["Python","Numpy","Pandas"],
    # "expLevel" : "2 - 4 years",
    # "location" : "Indore"
    # }
    currUser = request.session.get("user")
    currUserID = User.objects.get(userName=currUser)

    if currUserID.is_recruiter == 0:
        return JsonResponse({"message": "User Cannot Post Jobs"})

    else:
        if request.method == "POST":
            jobData = json.loads(request.body)
            job = postedJob(
                jobDate=timezone.now(),
                title=jobData["title"],
                jobPos=jobData["jobPos"],
                desc=jobData["desc"],
                timing=jobData["timing"],
                reqSkill=jobData["reqSkill"],
                expLevel=jobData["expLevel"],
                postedBy=request.session.get("user"),
                location=jobData["location"],
            )
            job.save()
            # print(jobData["reqSkill"])
            return JsonResponse(
                {
                    "success": True,
                    "data": {
                        "title": jobData["title"],
                        "jobPos": jobData["jobPos"],
                        "desc": jobData["desc"],
                        "timing": jobData["timing"],
                        "reqSkill": jobData["reqSkill"],
                        "expLevel": jobData["expLevel"],
                        "location": jobData["location"],
                    },
                }
            )

        return JsonResponse(
            {
                "success": False,
            }
        )


@csrf_exempt
def jobPostedBy(request):
    currUser = request.session.get("user")
    jobsPostedByUser = postedJob.objects.filter(postedBy=currUser)
    jobsList = []
    for jobs in jobsPostedByUser:
        userID = jobs.appliedPeople
        userNameOfApplicants = []

        if len(userID) == 0:
            userNameOfApplicants.append("None")

        else:
            userID = userID[1:]

            appPeople = list(userID.split(" "))

            for appUser in appPeople:
                try:
                    appData = User.objects.get(id=appUser)
                    userNameOfApplicants.append(appData.userName)
                except:
                    return JsonResponse(
                        {
                            "success": False,
                            "error": "No User Applied",
                        }
                    )

        jobObjDict = {
            "id": jobs.id,
            "title": jobs.title,
            "jobPos": jobs.jobPos,
            "desc": jobs.desc,
            "reqSkill": jobs.reqSkill,
            "expLevel": jobs.expLevel,
            "location": jobs.location,
            "timing": jobs.timing,
            "jobDate": jobs.jobDate,
            "appliedPeople": userNameOfApplicants,
        }
        jobsList.append(jobObjDict)
    return JsonResponse({"Jobs": jobsList})


@csrf_exempt
def apply(request, jobPostID):

    currUser = request.session.get("user")
    currUserID = User.objects.get(userName=currUser)

    if currUserID.is_recruiter == 1:
        return JsonResponse({"message": "Recruiter Cannot Apply to Jobs"})

    else:

        postedJobData = postedJob.objects.get(id=jobPostID)

        # Saving Data in PostedJob Model

        applicants = postedJobData.appliedPeople
        appliList = list(applicants.split(" "))

        if str(currUserID.id) in appliList:
            return JsonResponse(
                {
                    "success": False,
                    "error": "Already Applied",
                }
            )

        else:
            appliList.append(str(currUserID.id))

            appliString = " "

            finalAppli = appliString.join(appliList)

            postedJobData.appliedPeople = finalAppli
            postedJobData.save()

            # Saving Data for appliedJobsTo in User Model

            jobsApplied = currUserID.appliedJobsTo
            jobsAppliedList = list(jobsApplied.split(" "))

            jobsAppliedList.append(jobPostID)

            userAppliString = " "

            FinaluserApplJob = userAppliString.join(jobsAppliedList)

            currUserID.appliedJobsTo = FinaluserApplJob
            currUserID.save()

            return JsonResponse({"success": True, "user applied": currUser})


@csrf_exempt
def userAppliedJobs(request):
    currUser = request.session.get("user")
    currUserData = User.objects.get(userName=currUser)

    jobsID = currUserData.appliedJobsTo

    if len(jobsID) == 0:
        return JsonResponse({"success": False, "error": "No jobs Applied"})

    else:

        appJobs = list(jobsID.split(" "))
        jobsAppliedList = []

        for jobsApplied in appJobs:
            try:
                jobData = postedJob.objects.get(id=jobsApplied)

                jobObjDict = {
                    "id": jobData.id,
                    "title": jobData.title,
                    "jobPos": jobData.jobPos,
                    "desc": jobData.desc,
                    "reqSkill": jobData.reqSkill,
                    "expLevel": jobData.expLevel,
                    "location": jobData.location,
                    "timing": jobData.timing,
                    "jobDate": jobData.jobDate,
                }

                jobsAppliedList.append(jobObjDict)
            except:
                # print("Null Job ID")
                pass

        # print(jobsAppliedList)

        return JsonResponse({"success": True, "Jobs": jobsAppliedList})


@csrf_exempt
def cancelJob(request, jobPostID):

    currUser = request.session.get("user")
    currUserID = User.objects.get(userName=currUser)

    postedJobData = postedJob.objects.get(id=jobPostID)

    applicants = postedJobData.appliedPeople
    appliList = list(applicants.split(" "))

    if str(currUserID.id) in appliList:

        appliList.remove(str(currUserID.id))

        appliString = " "

        finalAppli = appliString.join(appliList)
        # print(finalAppli)

        postedJobData.appliedPeople = finalAppli
        postedJobData.save()

        # Saving Data for appliedJobsTo in User Model

        jobsApplied = currUserID.appliedJobsTo
        jobsAppliedList = list(jobsApplied.split(" "))

        jobsAppliedList.remove(jobPostID)

        userAppliString = " "

        FinaluserApplJob = userAppliString.join(jobsAppliedList)
        # print(FinaluserApplJob)

        currUserID.appliedJobsTo = FinaluserApplJob
        currUserID.save()

        return JsonResponse(
            {
                "success": True,
            }
        )

    else:
        return JsonResponse(
            {"success": False, "error": "User was Not Applied to the job"}
        )


@csrf_exempt
def updateData(request):
    if request.method == "POST":
        upData = json.loads(request.body)

        currUser = request.session.get("user")

        userData = User.objects.get(userName=currUser)

        # Username Validation
        if userData.userName != upData["userName"]:
            if User.objects.filter(userName=upData["userName"]).exists():
                return JsonResponse({"success": False, "error": "Username Taken"})
            else:
                userData.userName = upData["userName"]
                logout(request)

        # Email Validation
        if userData.email != upData["email"]:
            if User.objects.filter(email=upData["email"]).exists():
                return JsonResponse({"success": False, "error": "Email Taken"})
            else:
                userData.email = upData["email"]

        # Contact Validation
        if userData.contactNumber != upData["contactNumber"]:
            if User.objects.filter(contactNumber=upData["contactNumber"]).exists():
                return JsonResponse({"success": False, "error": "Contact Taken"})
            else:
                userData.contactNumber = upData["contactNumber"]

        userData.firstName = upData["firstName"]
        userData.lastName = upData["lastName"]
        userData.bio = upData["bio"]
        userData.dob = upData["dob"]
        userData.address = upData["address"]
        userData.city = upData["city"]
        userData.state = upData["state"]
        userData.country = upData["country"]
        userData.skills = upData["skills"]
        userData.projects = upData["projects"]
        userData.linkGithub = upData["linkGithub"]
        userData.linkLinkedIn = upData["linkLinkedIn"]
        userData.linkExtra = upData["linkExtra"]

        userData.save()

        # logouts()
        # if User.objects.filter(userName=upData['userName']).exists():
        #     print("Username Taken")
        #     return JsonResponse({
        #         "success": False,
        #         "error": "User name Taken"
        #     })
        # elif User.objects.filter(contactNumber=upData['userName']).exists():
        #     print("Username Taken")
        #     return JsonResponse({
        #         "success": False,
        #         "error": "User name Taken"
        #     })

        return JsonResponse(
            {
                "success": True,
            }
        )


@csrf_exempt
def jobs(request):
    joblist = list(postedJob.objects.values())
    return JsonResponse(joblist, safe=False)

@csrf_exempt
def jobApplications(request, jobPostID):
    job = postedJob.objects.get(id=jobPostID)
    applicants = job.appliedPeople.split(" ")
    appliList = []
    for applicant in applicants:
        try:
            user = User.objects.get(id=applicant)
            userDict = userData(user.userName)
            appliList.append(userDict)
        except:
            pass
    return JsonResponse(appliList, safe=False)

@csrf_exempt
def job(request, jobPostID):
    try:
        job = postedJob.objects.get(id=jobPostID)
        return JsonResponse(
            {
                "success": True,
                "data": {
                    "id": job.id,
                    "jobDate": job.jobDate,
                    "title": job.title,
                    "jobPos": job.jobPos,
                    "desc": job.desc,
                    "timing": job.timing,
                    "reqSkill": job.reqSkill,
                    "expLevel": job.expLevel,
                    "postedBy": job.postedBy,
                    "location": job.location,
                    "appliedPeople": job.appliedPeople,
                },
            }
        )
    except:
        return JsonResponse({"success": False, "error": "Invalid Job URL"})
