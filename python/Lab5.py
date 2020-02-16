import random

def userGuess():
    usr_guess = input()
    try:
        usr_guess = int(usr_guess)
    except ValueError:
        print("The value you entered is not a number!")
        userGuess()

    if usr_guess not in range(1, 11):
        print("Guess a number 1-10!")
        userGuess()
    
    return usr_guess

def  guessNumber():
    hiddenNumber = random.randint(1,10)
    correct = False
    
    print("You have 5 chances to pick a number 1-10.")
    
    for i in range(5):
        print("Guess %d:" % i)
        guess = userGuess()
        if guess > hiddenNumber:
            print("Guess is too high!")
        elif guess < hiddenNumber:
            print("Guess is too low!")
        elif guess == hiddenNumber:
            print("You guessed correctly! The number was %d" % hiddenNumber)
            correct = True
            break
    if correct == False:
        print("Unlucky!")

guessNumber()


