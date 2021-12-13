file1 = open("in.txt","r")
in1 = file1.readlines()
i=0
w=0
while i<len(in1)-3:
    if(int(in1[i]) + int(in1[i+1]) + int(in1[i+2])<int(in1[i+1]) + int(in1[i+2]) + int(in1[i+3])):
        w=w+1
    else:
        print(in1[i] + "   "+in1[i+1])

    i = i+1

in1[i]<in1[i+1]
print(w)
