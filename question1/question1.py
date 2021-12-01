#!/usr/bin/env python
# coding: utf-8

# In[54]:


nodes = {'A': ['B','D','H'], 
         'B': ['A','D','C'], 
         'C': ['B','D','F'], 
         'D': ['A','B','C','E'], 
         'E': ['D','F','H'],
         'F': ['C','E','G'],
         'G': ['F','H'],
         'H': ['A','E','G']}


# In[55]:


def find_all_paths(paths, target):
    result = []
    while paths:
        paths_next = []
        for p in paths:
            for n in nodes[p[-1]]:
                if n not in p:
                    if n == target:
                        result.append(p+[n])
                    else:
                        paths_next.append(p+[n])
        paths = paths_next
    return result
    
start = 'A'
end = 'H'
result = find_all_paths([[start]], end)

print('all paths:')
print(result)


# In[57]:


# nodes = {'A': ['B','D'], 
#          'B': ['A','D','C'], 
#          'C': ['B','D','F'], 
#          'D': ['A','B','C','E'], 
#          'E': ['D','F','H'],
#          'F': ['C','E','G'],
#          'G': ['F','H'],
#          'H': ['A','E','G']}

def find_shortest_path(paths, target):
    while paths:
        paths_next = []
        for p in paths:
            for n in nodes[p[-1]]:
                if n not in p:
                    if n == target:
                        return p+[n]
                    paths_next.append(p+[n])
        paths = paths_next
    
start = 'A'
end = 'H'
result = find_shortest_path([[start]], end)

print('shortest path:')
print(result)


# In[ ]:




