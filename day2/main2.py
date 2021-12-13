file1 = open("in.txt","r")
in1 = file1.readlines()
i=0
f=0
d=0
aim =0
while i < len(in1):
    tmp = in1[i]
    if tmp[0:1] == "f":
        f = f+ int(tmp[8])
        d += (aim * int(tmp[8]))
    elif(tmp[0:1] == "d"):
        aim += int(tmp[5])
        print(int(tmp[5]))
    elif(tmp[0:1] == "u"):
        aim -= int(tmp[3])
        # print(int(tmp[3]))

    i = i+1
print(f)
print(d)
print(f*d)