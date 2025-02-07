import numpy as np
import json

# Generate rose curve points using parametric equations
t = np.linspace(0, 2 * np.pi, 300)
k = 5  # Number of petals
r = np.sin(k * t)

x = r * np.cos(t)
y = r * np.sin(t)

# Save coordinates as JSON
rose_data = [{"x": float(x[i]), "y": float(y[i])} for i in range(len(x))]

with open("rose_data.json", "w") as f:
    json.dump(rose_data, f)

print("Rose data saved successfully!")
