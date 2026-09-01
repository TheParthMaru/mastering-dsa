# DSA Learning Plan (Structure-First)

> Strategy: learn all core **data structures** (how they work, when to use / avoid) before grinding LeetCode.
> Then learn **patterns & algorithms**, then apply everything on LeetCode.

Language: **Python** (easiest friction → focus on concepts).

---

## Why this order

Jumping into LeetCode too early trains pattern-matching without a map.
Building the map first (data structures → algorithms → problems) compounds better.

**Guardrail:** don’t do *zero* coding. For each structure, do a short build + use-case loop.
Skip LeetCode grind for now; keep “prove I understand it” tiny.

**Anti-stall rule:** max **2–3 sessions per structure**, then move on even if it feels imperfect. Revisit after Phase 1.

---

## Three phases

### Phase 1 — Data structures (you are here)

For each structure, lock these four things before moving on:

1. How it works (mental model)
2. Implement core ops in Python
3. Time/space for those ops
4. When to use / when not to (1–2 real examples)

### Phase 2 — Algorithms & patterns

Sorting, searching, recursion, two pointers, sliding window, BFS/DFS, greedy, DP — *after* the DS toolbelt exists.

### Phase 3 — LeetCode

Pattern-based practice, not random grinding.

---

## Phase 1 order (structure-first)

| # | Structure | Focus |
|---|-----------|--------|
| 1 | Arrays / lists | Revisit only if Big-O is fuzzy |
| 2 | Linked lists | Finish: reverse, middle, cycle idea (no LC) |
| 3 | Stack | LIFO, call stack, undo, matching brackets *conceptually* |
| 4 | Queue / deque | FIFO, BFS foundation, scheduling |
| 5 | Hash map / set | Highest-leverage DS — trade space for time |
| 6 | Trees (binary, BST) | Hierarchy; recursion becomes natural here |
| 7 | Heap / priority queue | Top-K, scheduling by priority |
| 8 | Graphs | Networks; adjacency list vs matrix |
| 9 | Trie (optional) | Prefix search |

**Skip for now:** AVL / Red-Black internals, segment trees, Fenwick trees.

Hash maps before deep tree grind is worth it — you’ll use them everywhere later.

---

## Per-structure template

Copy into each notebook / notes file:

```text
## <Structure>
- Mental model:
- Core operations + Big-O:
- Implemented: [ ] yes
- Use when:
- Avoid when:
- Built on top of / used by:
- One tiny demo (not LeetCode):
```

If you can’t fill **use when / avoid when**, you’re not done with that structure yet.

---

## Linked list close-out (before Stack)

- [ ] Pythonic cleanup (`is None`, truthy loops, `delete` returns bool)
- [ ] `reverse()`
- [ ] `find_middle()`
- [ ] Note when LL beats array (frequent insert/delete at front; unknown size)
- [ ] Note when array wins (index access, cache locality)

---

## This week

1. Close linked list (items above).
2. Start **Stack** the same way as LL — notes → implement → use/avoid.
3. Don’t open LeetCode yet.

---

## Later (Phase 2 preview — don’t start yet)

- Recursion (pivot topic)
- Two pointers / sliding window
- Binary search
- Sorting (merge / quick) as divide-and-conquer
- BFS / DFS (needs queue + recursion comfort)
- Greedy
- Dynamic programming

---

## Later (Phase 3 preview — don’t start yet)

Suggested first pattern problems (only after Phase 1 + 2):

1. Reverse Linked List
2. Middle of Linked List
3. Linked List Cycle
4. Merge Two Sorted Lists
5. Valid Parentheses (stack)
6. Binary Tree traversals / BFS
