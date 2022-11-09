import { Component } from '@angular/core';

import { GridBlock } from './grid-block/grid-block.type';
import { GridList } from './grid.type';

@Component({
  selector: 'fg-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  list: GridList = [
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkr5DeFDSovK8qwXEboMHpVepp1IjRRcaM_6hayCYAw&s',
      type: 'post',
      id: 1,
      updatedAt: 'asdf',
      createdAt: 'asdf',
    },
    {
      url: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkr5DeFDSovK8qwXEboMHpVepp1IjRRcaM_6hayCYAw&s',
        'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320',
      ],
      type: 'carousel',
      id: 1,
      updatedAt: 'asdf',
      createdAt: 'asdf',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkr5DeFDSovK8qwXEboMHpVepp1IjRRcaM_6hayCYAw&s',
      type: 'reel',
      id: 1,
      updatedAt: 'asdf',
      createdAt: 'asdf',
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkr5DeFDSovK8qwXEboMHpVepp1IjRRcaM_6hayCYAw&s',
      type: 'post',
      id: 1,
      updatedAt: 'asdf',
      createdAt: 'asdf',
    },
    {
      url: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkr5DeFDSovK8qwXEboMHpVepp1IjRRcaM_6hayCYAw&s',
        'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320',
      ],
      type: 'carousel',
      id: 1,
      updatedAt: 'asdf',
      createdAt: 'asdf',
    },
    {
      url: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkr5DeFDSovK8qwXEboMHpVepp1IjRRcaM_6hayCYAw&s',
        'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320',
      ],
      type: 'carousel',
      id: 1,
      updatedAt: 'asdf',
      createdAt: 'asdf',
    },
    {
      url: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkr5DeFDSovK8qwXEboMHpVepp1IjRRcaM_6hayCYAw&s',
        'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320',
      ],
      type: 'carousel',
      id: 1,
      updatedAt: 'asdf',
      createdAt: 'asdf',
    },
    {
      url: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkr5DeFDSovK8qwXEboMHpVepp1IjRRcaM_6hayCYAw&s',
        'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320',
      ],
      type: 'carousel',
      id: 1,
      updatedAt: 'asdf',
      createdAt: 'asdf',
    },
    {
      url: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkr5DeFDSovK8qwXEboMHpVepp1IjRRcaM_6hayCYAw&s',
        'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320',
      ],
      type: 'carousel',
      id: 1,
      updatedAt: 'asdf',
      createdAt: 'asdf',
    },
  ].reduce<GridList>((list, current, index) => {
    if (index % 3 === 0) {
      list.push([current] as GridList[number]);
    } else {
      list[list.length - 1].push(current as GridBlock);
    }
    return list;
  }, []);
}
