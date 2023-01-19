#!/usr/bin/python3
import random
number = random.randint(-10, 10)
if number > 0:
    print(number, "is a positive")
elif number == 0:
    print(number, "is a zero")
else:
    print(number, "is a negative")
