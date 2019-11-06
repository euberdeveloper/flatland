#include <time.h>
#include <vector>
#include <iterator>
#include <set>
#include <fstream>

using namespace std;

struct element{
	int index;
	bool value;
};

int main(){
	srand(time(NULL));
	vector<element> data = vector<element>();
	set<int> result = set<int>();
	int N;char ch;
	ifstream in("input.txt");
    in >> N;
	for (int i = 0; i < N; i++){
		element t;t.index = i ;
		in >> ch;
		switch(ch){
			case 's':
				t.value = 0;
				break;
			case 'd':
				t.value = 1;
		}
		data.push_back(t);
	}
	vector<element> temp;
	for(int i = 0; i < N*N; i++){
		temp = data;
		for(int j = rand()%(temp.size()-2) ; temp.size() > 1; j = rand()%(temp.size()-2)){
			auto it = temp.begin() + j+1;
			if(!(*it).value){
				temp.erase(it);
				temp.erase(it-1);
			}else{
				temp.erase(it+1);
				temp.erase(it);
			}
			++it;
		}
		result.insert(temp.at(0).index);
	}
	
	ofstream out("output.txt");
    out << result.size() << endl;
    for (int const &el : result)
    {
        out << " " << el;
    }
}
