#include <fstream>
#include <vector>
using namespace std;

enum direction
{
    LEFT,
    RIGHT
};

void findMarks(const vector<char> &data, int marks[2]) {
    const int n = data.size();
    bool leftFound = false, rightFound = false;
    marks[0] = n;
    marks[1] = -1;
    for (int i = 1; i < n - 1 && !(leftFound && rightFound); i += 2) {
        if (!leftFound && data.at(i) == 's' && data.at(i + 1) == 'd') {
            marks[0] = i;
            leftFound = true;
        }
        if (!rightFound && data.at(n - i - 2) == 's' && data.at(n - i - 1) == 'd') {
            marks[1] = n - i;
            rightFound = true;
        }
    }
}

bool sufficentCondition(const vector<char> &data, int i)
{
    const int n = data.size();
    return (i == 0 && data[1] == 'd') || (i == n - 1 && data[n - 2] == 's') || (i != 0 && i != n && data[i - 1] == 's' && data[i + 1] == 'd');
}

bool canCollapse(const vector<char> &data, direction d, int marks[2], int i)
{
    switch (d) {
        case LEFT:
            return (data[i - 1] == 's') || (i > marks[0]);
        case RIGHT:
            return (data[i + 1] == 'd') || (i < marks[1]);
    }
}

void solve(const vector<char> &data, vector<int> &result)
{
    const int n = data.size();
    int marks[2];
    findMarks(data, marks);
    for (int i = 0; i < n; i += 2)
    {
        if (sufficentCondition(data, i))
        {
            result.push_back(i);
        }
        else
        {
            bool inSolution;
            if (i == 0) {
                inSolution = canCollapse(data, RIGHT, marks, i);
            }
            else if (i == n - 1) {
                inSolution = canCollapse(data, LEFT, marks, i);
            }
            else {
                inSolution = canCollapse(data, LEFT, marks, i) && canCollapse(data, RIGHT, marks, i);
            }
            if (inSolution) {
                result.push_back(i);
            }
        }
    }
}

int main()
{
    int n;
    char temp;
    vector<char> data;
    vector<int> result;

    ifstream in("input.txt");
    in >> n;
    for (int i = 0; i < n; i++)
    {
        in >> temp;
        data.push_back(temp);
    }
    in.close();

    solve(data, result);

    ofstream out("output.txt");
    int m = result.size();
    out << m << endl;
    for (int i = 0; i < m; i++) {
        out << result.at(i) << endl;
    }
    out.close();

    return 0;
}