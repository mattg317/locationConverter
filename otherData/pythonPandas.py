# Import Pandas
# pip install pandas
import pandas as pd

file_input = "Shelter.csv"
file_output = "Shelter.json"

CA_data = pd.read_csv(file_input, dtype="str", header=0)
CA_data.to_json(file_output, orient="records")