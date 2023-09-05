# AI Crusade
This is a project that we(Team Zero Skills) worked on during the AIcrusade Hackathon 2023 that took place in Dhulikhel Village Resort on (3-4)th September. It was a 36-hour long hackathon with 22-hours of time allocated for coding. This project helped us get victory in **Environment** track. 
## Project Description
**Problem:** 

Faulty transformers have severe impacts in environment. They contain large quantity of oil, whose leakage can contaminate the environment. Older and less efficient transformers force usage of fuel based energy sources like generators and due to less reliability, the switch to clean energy sources is slowed down. Apart from this obvious downside, there is huge financial loss that comes with transformer failure. According to annual report of NEA in 2021/2022, equipment failure resulted in a loss of 15.38% energy which converts to around 1.4Kharba rupees in gross revenue. 

**Solution**

We attempt to solve this issue by being able to predict the failure chances of transformers registered in the database based on their sensor data. By knowing about a potentially weak transformer, maintenance can be planned and unexpected losses, blackouts etc can be prevented. 

**App:**

We have made a web app that allows us to  insert a new transformer in the database along with it’s location co-ordinates. Based on the real-time sensor data(We have simulated this using back-end as IOT sensor or actual transformer data was not feasible), the AI model checks whether there is any chances of failure. If failure is detected, it is denoted on the map with red marker. All the transformer within a radius of ~200KM is shown in the map itself. 

**Dataset and Model:**

We have used real dataset obtained from kaggle which has relevant features that are present in any transformers. There are 16 features, as follows.

- OTI- Oil Temperature Indicator
- WTI- Winding Temperature Indicator
- ATI- Ambient Temperature Indicator
- OLI- Oil Level Indicator
- OTIA- Oil Temperature Indicator Alarm
- OTIT- Oil Temperature Indicator Trip

- VL1- Phase Line 1
- VL2- Phase Line 2
- VL3- Phase Line 3
- IL1- Current Line 1
- IL2- Current Line 2
- IL3- Current Line 3
- VL12- Voltage line 1 2
- VL23- Voltage line 2 3
- VL31- Voltage line 3 1
- INUT- Neutral Current

Since our target column is MOG_A in which 0 indicates no failure in Magnetic Oil Gauge of the transformer, and 1 indicates failure in transformer. We have used StandardScaler() to normalize all our data items and RandomForestClassifier from sklearn to train, test and predict the chances of failure. 

**Data Source and Feasibility of data**

The data features that are used above are easily available in the grid or substations. Every transformer is setup with sensors that help us measure the first 6 features above, the rest other features are stored in the grid/substation in case of Nepal. Although this data is not publicly available, all of these data is already accessible to the insiders. So, with proper research we can utilize this solution without much additional costs. 

**Internal Working and Tech stacks**

We have used python(Pandas, Numpy) for analysis of data, scikit-learn for training and prediction, Django for serving api. Suitable value from sensor data is simulated by the back-end and then passed to the trained model for prediction, based on this prediction result, the database is updated to modify the `fault` parameter. Relevant data is exposed in the api for frontend to consume.

In the frontend, we have used NextJS & React for state management and routing, ShadcnUI LIbrary & Tailwind CSS for styling and MapBox GL api for rendering map.

## Initial Setup
1. Clone the repository
2. Ensure that you have NodeJS installed on your system
3. Ensure that you have Python and pip installed on your system

## Backend server Setup
1. Setup Up virtual Environment 
    - `$ python -m venv .venv`.
    - Activate venv.
    - Go to folder containing requirements.txt and `$ pip install -r requirements.txt.
2. Start the server
    - Go to the folder containing `manage.py`.
    - Run `$ python manage.py runserver`.

## Frontend Setup
1. `cd frontend` to go to the frontend directory
2. `npm install` to install all the dependencies
3. `npm run dev` to start the development server
4. Open [http://localhost:3000](http://localhost:3000/) with your browser to view the project in action.



## Demonstration
![chrome_lx7NEnoAKE](https://github.com/NebulaAnish/Grid-Guardian/assets/84511488/c2713a49-bacd-4a53-8d5d-ed1a5ccf9814)
![chrome_Oz8530Lunr](https://github.com/NebulaAnish/Grid-Guardian/assets/84511488/b72992b4-c8fc-467b-a925-315f76e97796)
