"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"relay-mutation","metadata":{"permalink":"/blog/relay-mutation","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/mutation.md","source":"@site/blog/mutation.md","title":"Relay - Mutation","description":"general steps for creating a new object using Relay Mutations:","date":"2023-12-30T13:22:57.050Z","formattedDate":"December 30, 2023","tags":[{"label":"graphql","permalink":"/blog/tags/graphql"},{"label":"Relay","permalink":"/blog/tags/relay"}],"readingTime":0.77,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"relay-mutation","title":"Relay - Mutation","tags":["graphql","Relay"]},"unlisted":false,"nextItem":{"title":"Implemenation of a Heap","permalink":"/blog/heap"}},"content":"general steps for creating a new object using Relay Mutations:\\n### 1. Define a GraphQL Mutation\\n   Create a GraphQL mutation that represents the action of creating a new object. This mutation should include input fields representing the data needed to create the object.\\n\\n   ```graphql\\n   // Example GraphQL mutation\\n\\nconst mutation = graphql`\\n    mutation CreateObjectMutation($input: CreateObjectInput!) {\\n    createObject(input: $input) {\\n    object {\\n      id\\n      name\\n      // other fields\\n    }\\n  }\\n}\\n` \\n\\n\\n   ```\\n\\n### 2. Create a Relay Mutation\\ncreare the commit method\\n```js\\nconst [commit] = useMutation<CreateObjectMutation>(mutation);\\n```\\nCreateObjectMutation: the type of mutation \\n\\nmutation: the definition of mutation \\n<br/>\\n### 3. invoke commit\\nthe new object to be create should be place in the \\"input\\" property of \\"variable\\". \\"variable\\" is a property of the big Object we commit.\\n\\n```js\\n<Button\\n        type=\\"primary\\"\\n        onClick={() =>\\n          commit({\\n            variables: { input: { createdBy: 1, name: title } },\\n            onCompleted: (response, errors) => {\\n              navigate(\\"/admin/forms\\");\\n            },\\n          })\\n        }\\n/>\\n```"},{"id":"heap","metadata":{"permalink":"/blog/heap","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/heap/heap.md","source":"@site/blog/heap/heap.md","title":"Implemenation of a Heap","description":"This is my first post on Docusaurus.","date":"2023-12-29T05:20:32.838Z","formattedDate":"December 29, 2023","tags":[{"label":"data structure","permalink":"/blog/tags/data-structure"}],"readingTime":3.51,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Implemenation of a Heap","description":"This is my first post on Docusaurus.","slug":"heap","tags":["data structure"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Relay - Mutation","permalink":"/blog/relay-mutation"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":"\x3c!-- truncate --\x3e\\n\\n### Min Heap\\n1. Complete binary tree\\n2. Each node in the Heap has a value no larger than its child nodes. Therefore, the top element (root node) has the smallest value in the Heap.\\n<br/>\\ntransform a binary tree into an array\\n\\n![Tree To Array](./TreeToArray.png)\\n\\n```js\\n// Implementing \\"Min Heap\\"\\npublic class MinHeap {\\n    // Create a complete binary tree using an array\\n    // Then use the binary tree to construct a Heap\\n    int[] minHeap;\\n    // the number of elements is needed when instantiating an array\\n    // heapSize records the size of the array\\n    int heapSize;\\n    // realSize records the number of elements in the Heap\\n    int realSize = 0;\\n\\n    public MinHeap(int heapSize) {\\n        this.heapSize = heapSize;\\n        minHeap = new int[heapSize + 1];\\n        // To better track the indices of the binary tree, \\n        // we will not use the 0-th element in the array\\n        // You can fill it with any value\\n        minHeap[0] = 0;\\n    }\\n\\n    // Function to add an element\\n    public void add(int element) {\\n        realSize++;\\n        // If the number of elements in the Heap exceeds the preset heapSize\\n        // print \\"Added too many elements\\" and return\\n        if (realSize > heapSize) {\\n            System.out.println(\\"Added too many elements!\\");\\n            realSize--;\\n            return;\\n        }\\n        // Add the element into the array\\n        minHeap[realSize] = element;\\n        // Index of the newly added element\\n        int index = realSize;\\n        // Parent node of the newly added element\\n        // Note if we use an array to represent the complete binary tree\\n        // and store the root node at index 1\\n        // index of the parent node of any node is [index of the node / 2]\\n        // index of the left child node is [index of the node * 2]\\n        // index of the right child node is [index of the node * 2 + 1]\\n        int parent = index / 2;\\n        // If the newly added element is smaller than its parent node,\\n        // its value will be exchanged with that of the parent node \\n        while ( minHeap[index] < minHeap[parent] && index > 1 ) {\\n            int temp = minHeap[index];\\n            minHeap[index] = minHeap[parent];\\n            minHeap[parent] = temp;\\n            index = parent;\\n            parent = index / 2;\\n        }\\n    }\\n\\n    // Get the top element of the Heap\\n    public int peek() {\\n        return minHeap[1];\\n    }\\n\\n    // Delete the top element of the Heap\\n    public int pop() {\\n        // If the number of elements in the current Heap is 0,\\n        // print \\"Don\'t have any elements\\" and return a default value\\n        if (realSize < 1) {\\n            System.out.println(\\"Don\'t have any element!\\");\\n            return Integer.MAX_VALUE;\\n        } else {\\n            // When there are still elements in the Heap\\n            // realSize >= 1\\n            int removeElement = minHeap[1];\\n            // Put the last element in the Heap to the top of Heap\\n            minHeap[1] = minHeap[realSize];\\n            realSize--;\\n            int index = 1;\\n            // When the deleted element is not a leaf node\\n            while (index <= realSize / 2) {\\n                // the left child of the deleted element\\n                int left = index * 2;\\n                // the right child of the deleted element\\n                int right = (index * 2) + 1;\\n                // If the deleted element is larger than the left or right child\\n                // its value needs to be exchanged with the smaller value\\n                // of the left and right child\\n                if (minHeap[index] > minHeap[left] || minHeap[index] > minHeap[right]) {\\n                    if (minHeap[left] < minHeap[right]) {\\n                        int temp = minHeap[left];\\n                        minHeap[left] = minHeap[index];\\n                        minHeap[index] = temp;\\n                        index = left;\\n                    } else {\\n                        // maxHeap[left] >= maxHeap[right]\\n                        int temp = minHeap[right];\\n                        minHeap[right] = minHeap[index];\\n                        minHeap[index] = temp;\\n                        index = right;\\n                    }\\n                } else {\\n                    break;\\n                }\\n            }\\n            return removeElement;\\n        } \\n    }\\n\\n    // return the number of elements in the Heap\\n    public int size() {\\n        return realSize;\\n    }\\n\\n    public String toString() {\\n        if (realSize == 0) {\\n            return \\"No element!\\";\\n        } else {\\n            StringBuilder sb = new StringBuilder();\\n            sb.append(\'[\');\\n            for (int i = 1; i <= realSize; i++) {\\n                sb.append(minHeap[i]);\\n                sb.append(\',\');\\n            }\\n            sb.deleteCharAt(sb.length() - 1);\\n            sb.append(\']\');\\n            return sb.toString();\\n        }\\n    }\\n\\n    public static void main(String[] args) {\\n        // Test case\\n        MinHeap minHeap = new MinHeap(3);\\n        minHeap.add(3);\\n        minHeap.add(1);\\n        minHeap.add(2);\\n        // [1,3,2]\\n        System.out.println(minHeap.toString());\\n        // 1\\n        System.out.println(minHeap.peek());\\n        // 1\\n        System.out.println(minHeap.pop());\\n        // [2, 3]\\n        System.out.println(minHeap.toString());\\n        minHeap.add(4);\\n        // Add too many elements\\n        minHeap.add(5);\\n        // [2,3,4]\\n        System.out.println(minHeap.toString());\\n    }\\n}\\n\\n```"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/blog/tags/facebook"},{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"Implemenation of a Heap","permalink":"/blog/heap"},"nextItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/blog/mdx-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.175,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/blog/long-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"May 29, 2019","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":2.05,"hasTruncateMarker":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"endi","tags":["hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/blog/first-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"hola","permalink":"/blog/tags/hola"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.12,"hasTruncateMarker":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"unlisted":false,"prevItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);