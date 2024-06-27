def fuzzbizz () : 
    i=int(input("donner n \n") )
    for x in  range (1,i+1) :
        
        if (x%3 ==0) :
            print('buzz')
        elif (x%5 == 0) :
            print('fizz')
        elif (x%5==0 and x%3 == 0) :
            print('buzzfizz')
        else : 
            print(x)

fuzzbizz()
