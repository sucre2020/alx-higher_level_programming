#!/usr/bin/python3
"""Square class module"""


Rectangle = __import__('9-rectangle').Rectangle


class Square(Rectangle):
    """Class Square that inherits from Rectangle"""
    def __init__(self, size):
        self.integer_validator("size", size)
        super().__init__(size, size)
        self.__size = size

    def __str__(self):
        """Returns a description of the square"""
        return "[Square] {}/{}".format(self.__size, self.__size)
